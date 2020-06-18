import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.entity';
import { PlayerDto } from './dto/createPlayer.dto';

@Controller('player')
export class PlayerController {

    constructor( private readonly playerService: PlayerService) {}

    @Post()
    createPlayer(@Body() player: PlayerDto): Promise<Player>{
        return this.playerService.createPlayer(player);

    }

    @Get()
    findAll(): Promise<Player[]> {
        return this.playerService.findAll();
    }

    @Delete(':id')
    deletePlayer(@Param("id") id: number): Promise<void> { 
        return this.playerService.deletePlayer(id);
    }
}
