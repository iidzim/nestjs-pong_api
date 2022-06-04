import { Relation } from "../../relations/relation.entity";
import { Player } from "../../players/player.entity";
export declare class GetPRFilterDto {
    id: number;
    user: Player;
    relation: Relation;
}
