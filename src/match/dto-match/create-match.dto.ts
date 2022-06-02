import { IsNotEmpty } from "class-validator";
import { Player } from "../../players/player.entity";

export class CreateMatchDto {
    
    @IsNotEmpty()
    user1: number;

    @IsNotEmpty()
    user2: number;
}