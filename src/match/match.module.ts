import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './match.entity';
import { PlayerLeagueStats } from 'src/league/PlayerLeagueStats.entity';
import { Player } from 'src/player/player.entity';
import { League } from 'src/league/league.entity';
import { MatchPlayerData } from './matchPlayerData.entity';
import { SetScore } from './setScore.entity';
import { MatchResultCalculationService } from 'src/global/Services/matchResultCalculation.service';

@Module({
  imports: [TypeOrmModule.forFeature([League, Player, PlayerLeagueStats, Match, MatchPlayerData, SetScore])],
  controllers: [MatchController],
  providers: [MatchService, MatchResultCalculationService]
})
export class MatchModule {}
