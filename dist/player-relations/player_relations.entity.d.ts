import { BaseEntity } from "typeorm";
import { Player } from "../players/player.entity";
import { Relation } from "../relations/relation.entity";
export declare class Player_relation extends BaseEntity {
    id: number;
    user: Player;
    relation: Relation[];
}
