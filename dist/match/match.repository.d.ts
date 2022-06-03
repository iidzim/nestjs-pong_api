import { Repository } from "typeorm";
import { Player } from "../players/player.entity";
import { CreateMatchDto } from "./dto-match/create-match.dto";
import { GetMatchFilterDto } from "./dto-match/get-match-filter.dto";
import { Match } from "./match.entity";
export declare class MatchRepository extends Repository<Match> {
    getMatch(FilterDto: GetMatchFilterDto): Promise<Match[]>;
    createMatch(createMacthDto: CreateMatchDto, player: Player): Promise<Match>;
}
