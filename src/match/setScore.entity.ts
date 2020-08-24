import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { MatchPlayerData } from "./matchPlayerData.entity";
import { PlayerEnum } from "src/global/types/playerEnum";
import { Exclude } from "class-transformer";


@Entity()
export class SetScore {

    @Exclude()
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        default: 0
    })
    games: number;

    /*@Column({
        type: 'enum',
        enum: PlayerEnum,
        default: 0
    })
    winner: PlayerEnum;*/

    @ManyToOne(type => MatchPlayerData, matchPlayerData => matchPlayerData.setScores, {onDelete: "CASCADE"})
    matchPlayerData: MatchPlayerData;

}