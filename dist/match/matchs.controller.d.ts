import { Player } from "../players/player.entity";
import { CreateMatchDto } from "./dto-match/create-match.dto";
import { GetMatchFilterDto } from "./dto-match/get-match-filter.dto";
import { Match } from "./match.entity";
import { MatchService } from "./matchs.service";
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    getUsers(FilterDto: GetMatchFilterDto): Promise<Match[]>;
    getUserById(id: number): Promise<Match>;
    addMatch(createMatchDto: CreateMatchDto, player: Player): Promise<Match>;
    deleteUser(id: number): Promise<void>;
}
