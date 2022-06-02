import { RelationStatus } from "../relation_status.enum";
export declare class GetRelationFilterDto {
    id: number;
    user1: number;
    user2: number;
    status: RelationStatus;
}
