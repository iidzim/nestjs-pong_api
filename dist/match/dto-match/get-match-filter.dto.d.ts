import { User } from "../../users/user.entity";
import { MatchStatus } from "../match_status.enum";
export declare class GetMatchFilterDto {
    id: number;
    user1: User;
    user2: number;
    status: MatchStatus;
}
