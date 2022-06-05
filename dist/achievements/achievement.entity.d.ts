import { BaseEntity } from "typeorm";
import { Player } from "../players/player.entity";
import { AchievementStatus } from "./achievement_status.enum";
export declare class Achievement extends BaseEntity {
    id: number;
    category: AchievementStatus;
    require: number;
    user: Player;
}
