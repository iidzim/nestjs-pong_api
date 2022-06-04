import { BaseEntity } from "typeorm";
import { Player_relation } from "../player-relations/player_relations.entity";
import { RelationStatus } from "./relation_status.enum";
export declare class Relation extends BaseEntity {
    id: number;
    status: RelationStatus;
    pr: Player_relation[];
}
