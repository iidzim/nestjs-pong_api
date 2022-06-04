import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Player } from "../../players/player.entity";

export class CreateAchievDto {

    @IsNotEmpty()
    @IsNumber()
    require: number;

    @IsNotEmpty()
    user: Player;
}