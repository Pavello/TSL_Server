import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne, Column, ManyToMany } from "typeorm";
import { playerDecision } from "src/global/types/playerDecision";
import { Player } from "src/player/player.entity";
import { Match } from "./match.entity";
import { match } from "assert";
import { SetScore } from "./setScore.entity";
import { type } from "os";

@Entity()
export class MatchPlayerData {

    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => Player, player => player.matchPlayerData, {eager: true})
    player: Player;

    @ManyToOne(type => Match, match => match.matchPlayerData)
    match: Match;

    @OneToMany(type => SetScore, setScore => setScore.matchPlayerData, {eager: true})
    setScores: SetScore[];

    @Column({
        type: "enum",
        enum: playerDecision,
        default: 0
    })
    fixtureDecision: playerDecision;

}
