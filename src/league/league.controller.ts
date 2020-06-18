import { Body, Controller, Delete, Get, Param, Post, BadRequestException, Query } from '@nestjs/common';
import { CreateLeagueDto } from './dto/createLeague.dto';
import { League } from './league.entity';
import { LeagueService } from './league.service';
import { PlayerLeagueStats } from 'src/league/PlayerLeagueStats.entity';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { ApiOperation,ApiResponse } from '@nestjs/swagger';
import { query } from 'express';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Post()
  create(@Body() CreateLeagueDto: CreateLeagueDto): Promise<League> {
    return this.leagueService.create(CreateLeagueDto);
  }

  @ApiOperation({ summary: 'Get all leagues' })
  @ApiResponse({ status: 200, description: 'Return all leagues.'})
  @Get()
  findAll(@Query() query): Promise<League[]> {
    return this.leagueService.findAll(query);
  }

  @Get(':id')
  findOne(@Query() query, @Param('id') id: number): Promise<League> {
    return this.leagueService.findOne(query, id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.leagueService.remove(id)
  }

  @Post('assign/:leagueId/:playerId')
  assignPlayerToLeague(@Param("leagueId") leagueId: number, @Param('playerId') playerId: number): Promise<PlayerLeagueStats>{
      return this.leagueService.assignPlayerToLeague(leagueId, playerId);
    }  
  } 
  