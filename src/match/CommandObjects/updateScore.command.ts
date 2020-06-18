import { ApiProperty } from "@nestjs/swagger";
import { SetScore } from "../setScore.entity";
import { PlayerEnum } from "src/global/types/playerEnum";

export class UpdateScoreCommand {

    @ApiProperty()
    setsNumber: number;
    @ApiProperty()
    p1SetScore: [{games: number}];
    @ApiProperty()
    p2SetScore: [{games: number}];
    @ApiProperty()
    winner: PlayerEnum
}