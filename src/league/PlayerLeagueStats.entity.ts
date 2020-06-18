import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, Unique} from 'typeorm'
import "reflect-metadata";
import { type } from 'os';
import { Player } from 'src/player/player.entity';
import { League } from 'src/league/league.entity';


@Entity()
@Unique(["player", "league"])
export class PlayerLeagueStats {
    
    @PrimaryGeneratedColumn()
    Id!: number;
    
    @ManyToOne(type => Player, player => player.playerLeagueStats)
    player: Player;

    @ManyToOne(type => League, league => league.playerLeagueStats)
    league: League;

    @Column({
        default: 0
    })
    playerLeaguePoints: number;

    @Column({
        default: 0
    })
    playerLeagueMatchesPlayed: number;
    
    @Column({
        default: 0
    })
    playerLeagueSetsWon: number;
    
    @Column({
        default: 0
    })
    playerLeagueSetsLost: number;
}