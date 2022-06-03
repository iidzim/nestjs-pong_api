import { Player } from "../players/player.entity";
import { CreateMatchDto } from "./dto-match/create-match.dto";
import { GetMatchFilterDto } from "./dto-match/get-match-filter.dto";
import { Match } from "./match.entity";
import { MatchRepository } from "./match.repository";
export declare class MatchService {
    private matchRepository;
    constructor(matchRepository: MatchRepository);
    createMatch(createMatchDto: CreateMatchDto, player: Player): Promise<Match>;
    getMatchById(id: number): Promise<Match>;
    getMatch(FilterDto: GetMatchFilterDto): Promise<Match[]>;
    deleteMatch(id: number): Promise<void>;
}
