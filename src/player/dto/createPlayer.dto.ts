import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PlayerDto{

    @IsString()
    @ApiProperty()
    firstName: string;

    @IsString()
    @ApiProperty()
    lastName: string;
}