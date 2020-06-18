import {Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique, JoinTable, ManyToMany} from 'typeorm'
import "reflect-metadata";
import { PlayerLeagueStats } from 'src/league/PlayerLeagueStats.entity';
import { type } from 'os';
import { Match } from 'src/match/match.entity';
import { MatchPlayerData } from 'src/match/matchPlayerData.entity';


@Entity()
@Unique(["firstName", "lastName"])
export class Player {

    @OneToMany(type => PlayerLeagueStats, playerLeagueStats => playerLeagueStats.player, {eager: true})
    playerLeagueStats: PlayerLeagueStats[];

    @OneToMany(type => MatchPlayerData, matchPlayerData => matchPlayerData.player)
    matchPlayerData: MatchPlayerData[];

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        length: 100
    })
    firstName: string;
    
    @Column({
        length: 100
    })
    lastName: string;

    @Column({
        default: 0
    })
    generalPoints: number;

    @Column({
        default: 0
    })
    generalRanking: number;

    
}