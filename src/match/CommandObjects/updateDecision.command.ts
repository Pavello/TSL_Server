import { playerDecision } from "src/global/types/playerDecision";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateDecisionCommand {
    
    @ApiProperty()
    decision: playerDecision;
}