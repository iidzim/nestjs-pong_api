import { Player } from "../players/player.entity";
import { CreateMatchDto } from "./dto-game/create-game.dto";
import { GetMatchFilterDto } from "./dto-game/get-game-filter.dto";
import { Match } from "./game.entity";
import { MatchRepository } from "./game.repository";
export declare class MatchService {
    private matchRepository;
    constructor(matchRepository: MatchRepository);
    createMatch(createMatchDto: CreateMatchDto, player: Player): Promise<Match>;
    getMatchById(id: number): Promise<Match>;
    getMatch(FilterDto: GetMatchFilterDto): Promise<Match[]>;
    deleteMatch(id: number): Promise<void>;
}
