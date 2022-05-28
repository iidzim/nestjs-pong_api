import { BaseEntity } from "typeorm";
import { User } from '../users/user.entity';
export declare class Relation extends BaseEntity {
    id: number;
    user1: User;
    user2: User;
    status: RelationStatus;
    constructor(id: number, status: RelationStatus);
}
export declare enum RelationStatus {
    NONE = "none",
    PENDING = "pending",
    FRIEND = "friend",
    BLOCKED = "blocked"
}
