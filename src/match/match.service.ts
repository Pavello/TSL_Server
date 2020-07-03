import { Match } from 'src/match/match.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository , getManager, Long } from 'typeorm';
import { PlayerLeagueStats } from 'src/league/PlayerLeagueStats.entity';
import { Player } from 'src/player/player.entity';
import { League } from 'src/league/league.entity';
import { MatchDto } from './dto/createMatch.dto';
import { UpdateDecisionCommand } from './CommandObjects/updateDecision.command';
import { MatchPlayerData } from './matchPlayerData.entity';
import { BadRequestException } from '@nestjs/common';
import { UpdateScoreCommand } from './CommandObjects/updateScore.command';
import { SetScore } from './setScore.entity';
import { MatchResultCalculationService } from 'src/global/Services/matchResultCalculation.service';
import { match } from 'assert';
import * as _ from "lodash";

export class MatchService {
  
    readonly PLAYER1_INDEX = 0;
    readonly PLAYER2_INDEX = 1;
    

    constructor(
        @InjectRepository(Match)
        private readonly matchRepository: Repository<Match>,
        @InjectRepository(League)
        private readonly leagueRepository: Repository<League>,
        @InjectRepository(Player)
        private readonly playerRepository: Repository<Player>,
        @InjectRepository(PlayerLeagueStats)
        private readonly playerLeagueStatsRepository: Repository<PlayerLeagueStats>,
        @InjectRepository(MatchPlayerData)
        private readonly matchPlayerDataRepository: Repository<MatchPlayerData>,
        private readonly matchResultCalculationService: MatchResultCalculationService
      ) {}

    async getAllMatches(): Promise<Match[]>{
        return await this.matchRepository.find({
            relations: ['matchPlayerData','matchPlayerData.player']
        })
    }

    async getMatch(matchId: number): Promise<Match>{
        return await this.matchRepository.findOne(matchId, {
            relations: ['matchPlayerData','matchPlayerData.player','league']
        })
    }

    async getFixuturesFromCurrentWeek(leagueId: number) {

            const fixturesToGroup = await this.matchRepository.createQueryBuilder("match")
            .innerJoinAndSelect("match.matchPlayerData", "matchPlayerData")
            .innerJoinAndSelect("matchPlayerData.player", "player")
            .where(`match.fixture between now() - interval '8 days' 
                    and now() + interval '8 days'
                    AND match.status = false
                    AND "leagueId" = :league`, {league: leagueId})
            .getMany();
            
            const fixturesGrouped =  _.groupBy(fixturesToGroup, match => {
                return match.fixture.toLocaleDateString();
            })
        return fixturesGrouped;
    }

    async create(createMatchDto: MatchDto, leagueId: number): Promise<Match> {
        const leagueToAssign = await this.leagueRepository.findOne(leagueId);

        const matchToCreate = new Match();
        matchToCreate.fixture = createMatchDto.fixture;
        matchToCreate.league = leagueToAssign;

        return await this.matchRepository.save(matchToCreate);
    }

    async deleteMatch(matchId: number){
        return await this.matchRepository.delete(matchId);
    }

    async updateMatch(matchDto: MatchDto, matchId: number){
        const matchToUpdate = await this.matchRepository.findOne(matchId);

        matchToUpdate.fixture = matchDto.fixture;

        return await this.matchRepository.save(matchToUpdate);
    }

    async updatePlayerAssignment(playerId: number,
                                matchId: number,
                                playerIndex: number): Promise<Match>{
        const foundPlayer = await this.playerRepository.findOne(playerId)
        const matchToAssign = await this.matchRepository.findOne(matchId);

        
        if(playerIndex == this.PLAYER1_INDEX || playerIndex == this.PLAYER2_INDEX){
            matchToAssign.matchPlayerData[playerIndex].player = foundPlayer;
            matchToAssign.pointsGain = this.matchResultCalculationService.calculatePointsGain(matchToAssign);
            await this.matchPlayerDataRepository.save(matchToAssign.matchPlayerData)
        }else{
                throw new BadRequestException('Błędny indeks gracza')
        }
            
        return await this.matchRepository.save(matchToAssign)
    }

    async assignPlayerToMatch(playerId: number, matchId: number): Promise<MatchPlayerData> {
        const foundPlayer = await this.playerRepository.findOne(playerId)
        const matchToAssign = await this.matchRepository.findOne(matchId);
        
        
        if(matchToAssign.matchPlayerData.length <= 2){
            const matchPlayerData = new MatchPlayerData();

            matchPlayerData.player = foundPlayer;
            matchPlayerData.match = matchToAssign;
    
            await this.matchPlayerDataRepository.save(matchPlayerData);

            const [mpdFound, numberOfMpd ] = await this.matchPlayerDataRepository.findAndCount({
                relations: ['match'],
                where: {
                    match: matchToAssign
                }
            })
            
            if(numberOfMpd == 2){
                let sum = 0;
                mpdFound.forEach(matchPlayerData =>{
                    sum += matchPlayerData.player.generalPoints
                })

                mpdFound[0].match.pointsGain = sum/2;
                
                await this.matchRepository.save(mpdFound[0].match)
            }
            return matchPlayerData;
        }else{
            throw new BadRequestException('Błędne żądanie')
        }
    }
    
    async fixtureDecisionUpdate(matchId: number,
                                updateDecisionCommand: UpdateDecisionCommand,
                                playerIndex: number){
        const matchToUpdate = await this.matchRepository.findOne(matchId);

        if(playerIndex == this.PLAYER1_INDEX || playerIndex == this.PLAYER2_INDEX){
        matchToUpdate.matchPlayerData[playerIndex].fixtureDecision = updateDecisionCommand.decision;
        await this.matchPlayerDataRepository.save(matchToUpdate.matchPlayerData[playerIndex])
        }else{
            throw new BadRequestException('Błędny indeks gracza')
        }
        
        return await this.matchRepository.save(matchToUpdate)
    }

    async finishMatch(  matchId: number, updateScoreCommand: UpdateScoreCommand): Promise<Match>{
        const matchToFinish = await this.matchRepository.findOne(matchId)

        for (let i = 0; i < updateScoreCommand.setsNumber; i++) {
            const newSetP1 = new SetScore();
            const newSetP2 = new SetScore();
            newSetP1.games = updateScoreCommand.p1SetScore[i].games
            newSetP2.games = updateScoreCommand.p2SetScore[i].games
            matchToFinish.matchPlayerData[this.PLAYER1_INDEX].setScores.push(newSetP1)
            matchToFinish.matchPlayerData[this.PLAYER2_INDEX].setScores.push(newSetP2)
        }
        matchToFinish.winner = updateScoreCommand.winner;
        matchToFinish.setsNumber = updateScoreCommand.setsNumber;
        matchToFinish.status = true;

        const calculateGainResult = this.matchResultCalculationService.assignPointsGainToPlayers(matchToFinish)
        const setsCalculationResult = this.matchResultCalculationService.addSetsToWinners(matchToFinish)
        const loser = this.matchResultCalculationService.checkMatchLoser(matchToFinish);

        const winnerPlayerLeagueStatsToSave = await this.playerLeagueStatsRepository.findOne({
            where:{
                player: matchToFinish.matchPlayerData[matchToFinish.winner - 1].player,
                league: matchToFinish.league
            }
        })

        const loserPlayerLeagueStatsToSave = await this.playerLeagueStatsRepository.findOne({
            where:{
                player: matchToFinish.matchPlayerData[loser - 1].player,
                league: matchToFinish.league
            }
        })
       
        winnerPlayerLeagueStatsToSave.playerLeaguePoints += calculateGainResult.winnerPointsGained;
        winnerPlayerLeagueStatsToSave.playerLeagueSetsWon += setsCalculationResult.winnerSetsWon;
        winnerPlayerLeagueStatsToSave.playerLeagueSetsLost += setsCalculationResult.winnerSetsLost;
        winnerPlayerLeagueStatsToSave.playerLeagueMatchesPlayed++;

        loserPlayerLeagueStatsToSave.playerLeaguePoints += calculateGainResult.loserPointsGained;
        loserPlayerLeagueStatsToSave.playerLeagueSetsWon += setsCalculationResult.loserSetsWon;
        loserPlayerLeagueStatsToSave.playerLeagueSetsLost += setsCalculationResult.loserSetsLost;
        loserPlayerLeagueStatsToSave.playerLeagueMatchesPlayed++;

        await this.matchRepository.save(matchToFinish);
        await this.playerLeagueStatsRepository.save(winnerPlayerLeagueStatsToSave)
        await this.playerLeagueStatsRepository.save(loserPlayerLeagueStatsToSave)
        return await this.matchRepository.findOne(matchToFinish.id)
    }
}