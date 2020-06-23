import { Body, Controller, Get, Param, Post, Query, Delete, Put } from '@nestjs/common';
import { Match } from './match.entity';
import { MatchService } from './match.service';
import { MatchDto } from './dto/createMatch.dto';
import { UpdateDateColumn } from 'typeorm';
import { UpdateDecisionCommand } from './CommandObjects/updateDecision.command';
import { query } from 'express';
import { UpdateScoreCommand } from './CommandObjects/updateScore.command';
import { MatchPlayerData } from './matchPlayerData.entity';

@Controller('match')
export class MatchController {

    constructor(private readonly matchService: MatchService) {}

    @Get('')
    getAllMatches(): Promise<Match[]> {
        return this.matchService.getAllMatches();
    }

    @Get(':matchId')
    getMatch(@Param("matchId") matchId: number): Promise<Match> {
        return this.matchService.getMatch(matchId);
    }

    @Post(':leagueId')
    create(@Body() CreateMatchDto: MatchDto, @Param("leagueId") leagueId: number): Promise<Match> {
        return this.matchService.create(CreateMatchDto, leagueId);
    }

    @Put('fixtureDecision/:matchId')
    fixtureDecisionUpdate(  @Param('matchId') matchId: number,
                            @Body() updateDecisionCommand: UpdateDecisionCommand,
                            @Query('playerIndex') playerIndex: number){
        return this.matchService.fixtureDecisionUpdate(matchId, updateDecisionCommand, playerIndex);
    }
    
    @Put('finishMatch/:matchId')
    finishMatch(@Param('matchId') matchId: number,
                @Body() updateScoreCommand: UpdateScoreCommand){
        return this.matchService.finishMatch(matchId, updateScoreCommand)
    }

    
    @Post('assign/:playerId/:matchId')
    assignPlayerToMatch(@Param("playerId") playerId: number,
                        @Param("matchId") matchId: number): Promise<MatchPlayerData> {
        return this.matchService.assignPlayerToMatch(playerId, matchId);
    }

    @Put('update/:playerId/:matchId')
    updatePlayerAssignment( @Param("playerId") playerId: number,
                            @Param("matchId") matchId: number,
                            @Query('playerIndex') playerIndex: number){
        return this.matchService.updatePlayerAssignment(playerId, matchId, playerIndex);
    }

    @Delete(':matchId')
    async removeMatch(@Param('matchId') matchId: number){
        return this.matchService.deleteMatch(matchId)
    }

    @Put(':matchId')
    async updateMatch(@Body() matchDto: MatchDto, @Param('matchId') matchId: number){
        return this.matchService.updateMatch(matchDto, matchId);
    }

    @Get('weekFixtures/:leagueId')
    async getFixuturesFromCurrentWeek(@Param('leagueId') leagueId: number){
        return this.matchService.getFixuturesFromCurrentWeek(leagueId);
    }

}
