import { Player } from "../../players/player.entity";
import { RelationStatus } from "../relation_status.enum";
export declare class GetRelationFilterDto {
    id: number;
    user1: Player;
    user2: number;
    status: RelationStatus;
}
