import { HalfSeason } from "src/global/types/halfSeason";
import { LeagueCategory } from "src/global/types/League_Category";
import {Length, IsString} from 'class-validator'
import { ApiProperty } from "@nestjs/swagger";

export class CreateLeagueDto {
    
    @Length(4,4)
    @IsString()
    @ApiProperty()
    year: string;
    
    @ApiProperty()
    halfSeason: HalfSeason;
    
    @ApiProperty()
    leagueCategory: LeagueCategory;
    
    @ApiProperty()
    archivated: boolean;
  }