import { Player } from "../../players/player.entity";
import { MatchStatus } from "../match_status.enum";
export declare class GetMatchFilterDto {
    id: number;
    user1: Player;
    user2: number;
    status: MatchStatus;
}
