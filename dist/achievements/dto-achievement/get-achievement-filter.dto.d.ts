import { Player } from "../../players/player.entity";
import { AchievementStatus } from "../achievement_status.enum";
export declare class GetAchievFilterDto {
    category: AchievementStatus;
    require: number;
    user: Player;
}
