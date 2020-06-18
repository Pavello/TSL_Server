import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from './league.entity';
import { LeagueService } from './league.service';
import { LeagueController } from './league.controller';
import { Player } from 'src/player/player.entity';
import { PlayerLeagueStats } from 'src/league/PlayerLeagueStats.entity';

@Module({
    imports: [TypeOrmModule.forFeature([League, Player, PlayerLeagueStats])],
    providers: [LeagueService],
    controllers: [LeagueController]
})
export class LeagueModule {}
