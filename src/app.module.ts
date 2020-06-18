import { Module } from '@nestjs/common';
import { LeagueModule } from './league/league.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './player/player.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './global/validation.pipe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchModule } from './match/match.module';
import { ConfigModule } from '@nestjs/config';
import { config } from '../config/config';
import { DatabaseConfig } from '../config/database.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    ServeStaticModule.forRoot({
      rootPath: 'public/',
    }),
    LeagueModule,
    PlayerModule,
    MatchModule,
],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AppService
  ],
})
export class AppModule {}
