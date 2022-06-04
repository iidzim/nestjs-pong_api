"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchRepository = void 0;
const typeorm_1 = require("typeorm");
const match_entity_1 = require("./match.entity");
const match_status_enum_1 = require("./match_status.enum");
let MatchRepository = class MatchRepository extends typeorm_1.Repository {
    async getMatch(FilterDto) {
        const { id, user1, winner, status } = FilterDto;
        const query = this.createQueryBuilder('match');
        if (id) {
            query.andWhere('match.id = :id', { id });
        }
        if (user1) {
            query.andWhere('match.user1 = :user1', { user1 });
        }
        if (winner) {
            query.andWhere('match.winner = :winner', { winner });
        }
        if (status) {
            query.andWhere('match.status = :status', { status });
        }
        const matchs = await query.getMany();
        return matchs;
    }
    async createMatch(createMacthDto, player) {
        const { user1 } = createMacthDto;
        const match = new match_entity_1.Match();
        match.user1 = user1;
        match.winner = '';
        match.score = 0;
        match.status = match_status_enum_1.MatchStatus.GAMEOVER;
        await match.save();
        return match;
    }
};
MatchRepository = __decorate([
    (0, typeorm_1.EntityRepository)(match_entity_1.Match)
], MatchRepository);
exports.MatchRepository = MatchRepository;
//# sourceMappingURL=match.repository.js.map