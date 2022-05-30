import { User } from "../../users/user.entity";
import { RelationStatus } from "../relation_status.enum";
export declare class GetRelationFilterDto {
    id: number;
    user1: User;
    user2: number;
    status: RelationStatus;
}
