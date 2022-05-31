import { BaseEntity } from "typeorm";
import { Player } from '../players/player.entity';
import { MatchStatus } from "./match_status.enum";
export declare class Match extends BaseEntity {
    id: number;
    user1: Player;
    user2: number;
    winner: string;
    score: number;
    status: MatchStatus;
}
