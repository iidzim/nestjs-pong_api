"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchRepository = void 0;
const typeorm_1 = require("typeorm");
const match_entity_1 = require("./match.entity");
const match_status_enum_1 = require("./match_status.enum");
class MatchRepository extends typeorm_1.Repository {
    async getMatch(FilterDto) {
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
    async createMatch(createMacthDto) {
        const { user1, user2 } = createMacthDto;
        const match = new match_entity_1.Match();
        match.user1 = user1;
        match.user2 = user2;
        match.winner = '';
        match.score = 0;
        match.status = match_status_enum_1.MatchStatus.GAMEOVER;
        await match.save();
        return match;
    }
}
exports.MatchRepository = MatchRepository;
//# sourceMappingURL=match.repository.js.map