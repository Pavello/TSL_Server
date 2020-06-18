import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { MatchPlayerData } from "./matchPlayerData.entity";
import { PlayerEnum } from "src/global/types/playerEnum";


@Entity()
export class SetScore {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        default: 0
    })
    games: number;

    @Column({
        type: 'enum',
        enum: PlayerEnum,
        default: 0
    })
    winner: PlayerEnum;

    @ManyToOne(type => MatchPlayerData, matchPlayerData => matchPlayerData.setScores)
    matchPlayerData: MatchPlayerData;

}