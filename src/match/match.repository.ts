import { Repository } from "typeorm";
import { CreateMatchDto } from "./dto-match/create-match.dto";
import { GetMatchFilterDto } from "./dto-match/get-match-filter.dto";
import { Match } from "./match.entity";
import { MatchStatus } from "./match_status.enum";

export class MatchRepository extends Repository<Match> {

	async getMatch(FilterDto: GetMatchFilterDto): Promise<Match[]> {
		const { id, user1, user2, status } = FilterDto;
		const query = this.createQueryBuilder('match');
		if (id) {
			query.andWhere('match.id = :id', { id });
		}
		if (user1) {
			query.andWhere('match.user1 = :user1', { user1 });
		}
		if (user2) {
			query.andWhere('match.user2 = :user2', { user2 });
		}
		if (status) {
			query.andWhere('match.status = :status', { status });
		}
		const matchs = await query.getMany();
		return matchs;
	}

	async createMatch(createMacthDto: CreateMatchDto): Promise<Match> {
		const { user1, user2 } = createMacthDto;
		const match = new Match();
		match.user1 = user1;
		match.user2 = user2;
		match.winner = '';
		match.score = 0;
		match.status = MatchStatus.GAMEOVER;
		await match.save();
		return match;
	}
}