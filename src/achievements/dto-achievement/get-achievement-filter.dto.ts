import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Player } from "../../players/player.entity";

export class GetAchievFilterDto {

	@IsOptional()
	@IsString()
	name: string;

	@IsOptional()
	@IsNotEmpty()
	@IsNumber()
	require: number;

	@IsOptional()
	@IsNotEmpty()
	user: Player;
}