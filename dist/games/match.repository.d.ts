import { Repository } from "typeorm";
import { Player } from "../players/player.entity";
import { CreateMatchDto } from "./dto-game/create-game.dto";
import { GetGameFilterDto } from "./dto-game/get-game-filter.dto";
import { Game } from "./game.entity";
export declare class GameRepository extends Repository<Game> {
    getGame(FilterDto: GetGameFilterDto): Promise<Game[]>;
    createMatch(createMacthDto: CreateMatchDto, player: Player): Promise<Game>;
}
