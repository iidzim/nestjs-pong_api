import { BaseEntity } from "typeorm";
export declare class Match extends BaseEntity {
    id: number;
    user1: number;
    user2: number;
    winner: string;
    loser: string;
    score: number;
    status: string;
    constructor(id: number, user1: number, user2: number, winner: string, loser: string, score: number, status: string);
}
