import { BaseEntity } from "typeorm";
import { Match_players } from "../match-players/match-player.entity";
import { GameStatus } from "./game_status.enum";
export declare class Game extends BaseEntity {
    id: number;
    winner: string;
    status: GameStatus;
    mp: Match_players[];
}
