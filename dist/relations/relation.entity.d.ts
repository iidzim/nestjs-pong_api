import { BaseEntity } from "typeorm";
import { User } from "../users/user.entity";
import { RelationStatus } from "./relation_status.enum";
export declare class Relation extends BaseEntity {
    id: number;
    user1: User;
    user2: number;
    status: RelationStatus;
}
