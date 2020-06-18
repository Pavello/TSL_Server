import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { PlayerDto } from './dto/createPlayer.dto';

@Injectable()
export class PlayerService {
    
    @InjectRepository(Player)
    private playerRepository: Repository<Player>;

    async findAll(): Promise<Player[]> {
        return this.playerRepository.find();
    }

    createPlayer(player: PlayerDto) {
        
        const playerToSave = new Player();
        playerToSave.firstName = player.firstName;
        playerToSave.lastName = player.lastName;
        
        return this.playerRepository.save(playerToSave);
    }

    async deletePlayer(id: number): Promise<void> {
        await this.playerRepository.delete(id);
    }

}
