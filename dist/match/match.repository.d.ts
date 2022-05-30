import { Repository } from "typeorm";
import { CreateMatchDto } from "./dto-match/create-match.dto";
import { GetMatchFilterDto } from "./dto-match/get-match-filter.dto";
import { Match } from "./match.entity";
export declare class MatchRepository extends Repository<Match> {
    getMatch(FilterDto: GetMatchFilterDto): Promise<Match[]>;
    createMatch(createMacthDto: CreateMatchDto): Promise<Match>;
}
