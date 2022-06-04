import { BaseEntity } from "typeorm";
import { Game } from "../games/game.entity";
import { Player } from "../players/player.entity";
export declare class Match_players extends BaseEntity {
    id: number;
    win: boolean;
    score: number;
    user: Player;
    game: Game;
}
