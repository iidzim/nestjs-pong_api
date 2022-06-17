import { BaseEntity } from "typeorm";
import { RelationStatus } from "./relation_status.enum";
export declare class Relation extends BaseEntity {
    id: number;
    status: RelationStatus;
}
