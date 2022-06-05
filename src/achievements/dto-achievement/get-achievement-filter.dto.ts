import { IsIn, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Player } from "../../players/player.entity";
import { AchievementStatus } from "../achievement_status.enum";

export class GetAchievFilterDto {

	@IsOptional()
	@IsIn([AchievementStatus.FIRST, AchievementStatus.BRONZE, AchievementStatus.SILVER, AchievementStatus.GOLD])
	category: AchievementStatus;

	@IsOptional()
	@IsNotEmpty()
	@IsNumber()
	require: number;

	@IsOptional()
	@IsNotEmpty()
	user: Player;
}