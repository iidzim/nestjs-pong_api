import { BaseEntity } from "typeorm";
import { Player } from "../players/player.entity";
import { RelationStatus } from "./relation_status.enum";
export declare class Relation extends BaseEntity {
    id: number;
    user1: number;
    status: RelationStatus;
    user2: Player;
}
