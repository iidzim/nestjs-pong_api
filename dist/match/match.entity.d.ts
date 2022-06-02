import { BaseEntity } from "typeorm";
import { MatchStatus } from "./match_status.enum";
export declare class Match extends BaseEntity {
    id: number;
    user1: number;
    user2: number;
    winner: string;
    score: number;
    status: MatchStatus;
}
