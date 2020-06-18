import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne, Column, ManyToMany } from "typeorm";
import { Player } from "src/player/player.entity";
import { userInfo } from "os";
import { playerDecision } from "src/global/types/playerDecision";
import { League } from "src/league/league.entity";
import { PlayerEnum } from "src/global/types/playerEnum";
import { MatchPlayerData } from "./matchPlayerData.entity";


@Entity()
export class Match {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    fixture: Date;
    
    @Column({
        default: 0
    })
    pointsGain: number;

    @Column({
        type: "enum",
        enum: PlayerEnum,
        default: 0
    })
    winner: PlayerEnum;

    @Column({
        default: 0
    })
    setsNumber: number;

    @Column({
        default: false
    })
    status: boolean;

    @OneToMany(type => MatchPlayerData, matchPlayerData => matchPlayerData.match, {eager: true})
    matchPlayerData: MatchPlayerData[];

    @ManyToOne(type => League, league => league.matches, {onDelete: 'CASCADE', eager: true})
    league: League;

}