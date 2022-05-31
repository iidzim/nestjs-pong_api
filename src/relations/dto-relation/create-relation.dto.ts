import { IsNotEmpty } from "class-validator";
import { Player } from "../../players/player.entity";

export class CreateRelationDto {

    @IsNotEmpty()
    user1: Player;

    @IsNotEmpty()
    user2: number;
}