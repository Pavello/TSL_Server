import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { League } from './league.entity';
import { PlayerLeagueStats } from './PlayerLeagueStats.entity';
import { Player } from 'src/player/player.entity';
import { CreateLeagueDto } from './dto/createLeague.dto';

@Injectable()
export class LeagueService {

  constructor(
    @InjectRepository(League)
    private readonly leagueRepository: Repository<League>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(PlayerLeagueStats)
    private readonly playerLeagueStatsRepository: Repository<PlayerLeagueStats>
  ) {}

  create(createLeagueDto: CreateLeagueDto): Promise<League> {
    const LeagueToAdd = new League();
    LeagueToAdd.year = createLeagueDto.year;
    LeagueToAdd.halfSeason = createLeagueDto.halfSeason;
    LeagueToAdd.leagueCategory = createLeagueDto.leagueCategory;
    LeagueToAdd.archivated = createLeagueDto.archivated;

    return this.leagueRepository.save(LeagueToAdd);
  }

  async findAll(query): Promise<League[]> {
    
    if('playerStats' in query){
      return await this.leagueRepository.find({
        relations: ['playerLeagueStats', 'playerLeagueStats.player'] 
      });
    }else if('matches' in query){
      return await this.leagueRepository.find({
        relations: ['matches'] 
      });
    }else{
      return await this.leagueRepository.find();
    }
}

  async findOne(query, id: number): Promise<League> {

    if('playerStats' in query){
      return await this.leagueRepository.findOne(id, {
        relations: ['playerLeagueStats', 'playerLeagueStats.player'] 
      });
    }else if('matches' in query){
      return await this.leagueRepository.findOne(id, {
        relations: ['matches'] 
      });
    }else{
      return await this.leagueRepository.findOne(id);
    }
  }

  async remove(id: number): Promise<void> {
    await this.leagueRepository.delete(id);
  }

  async assignPlayerToLeague(leagueId: number, playerId: number): Promise<PlayerLeagueStats>{
    const foundPlayer = await this.playerRepository.findOne(playerId)
    const leagueToAssign = await this.leagueRepository.findOne(leagueId);

    const playerLeagueStats= new PlayerLeagueStats();

    playerLeagueStats.player = foundPlayer;
    playerLeagueStats.league = leagueToAssign;
    return await this.playerLeagueStatsRepository.save(playerLeagueStats)
  }
}