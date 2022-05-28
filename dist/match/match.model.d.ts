import { BaseEntity } from "typeorm";
import { User } from '../users/user.entity';
export declare class Match extends BaseEntity {
    id: number;
    user1: User;
    user2: User;
    winner: string;
    loser: string;
    score: number;
    status: MatchStatus;
    constructor(id: number, winner: string, loser: string, score: number, status: MatchStatus);
}
export declare enum MatchStatus {
    PLAYING = "playing",
    GAMEOVER = "gameover"
}
