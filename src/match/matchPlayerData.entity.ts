import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne, Column, ManyToMany } from "typeorm";
import { playerDecision } from "src/global/types/playerDecision";
import { Player } from "src/player/player.entity";
import { Match } from "./match.entity";
import { match } from "assert";
import { SetScore } from "./setScore.entity";
import { type } from "os";
import { exception } from "console";
import { Exclude } from "class-transformer";

@Entity()
export class MatchPlayerData {

    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => Player, player => player.matchPlayerData, { eager: true })
    player: Player;

    @ManyToOne(type => Match, match => match.matchPlayerData, {onDelete: "CASCADE"})
    match: Match;

    @OneToMany(type => SetScore, setScore => setScore.matchPlayerData, {cascade: true, eager: true })
    setScores: SetScore[];

    @Column({
        type: "enum",
        enum: playerDecision,
        default: 0
    })
    fixtureDecision: playerDecision;

}
