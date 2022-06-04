import { BaseEntity } from "typeorm";
import { Player } from "../players/player.entity";
export declare class Achievement extends BaseEntity {
    id: number;
    name: string;
    description: string;
    require: number;
    user: Player;
}
