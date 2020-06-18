import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import "reflect-metadata";
import { HalfSeason } from '../global/types/halfSeason'
import {LeagueCategory} from '../global/types/League_Category'
import { PlayerLeagueStats } from './PlayerLeagueStats.entity';
import { Match } from 'src/match/match.entity';

@Entity()
export class League {

    @OneToMany(type => PlayerLeagueStats, playerLeagueStats => playerLeagueStats.league)
    playerLeagueStats: PlayerLeagueStats[];


    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: LeagueCategory,
    })
    leagueCategory: LeagueCategory;

    @Column()
    year: string;

    @Column({
        type: "enum",
        enum: HalfSeason,
    })
    halfSeason: HalfSeason;

    @Column({
        default: false
    })
    archivated: boolean;

    
    @OneToMany(type => Match, match => match.league)
    matches: Match[];
    
}