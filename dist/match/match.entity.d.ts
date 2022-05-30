import { BaseEntity } from "typeorm";
import { User } from '../users/user.entity';
import { MatchStatus } from "./match_status.enum";
export declare class Match extends BaseEntity {
    id: number;
    user1: User;
    user2: number;
    winner: string;
    score: number;
    status: MatchStatus;
}
