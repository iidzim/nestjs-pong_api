"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Player_repository_1 = require("../Players/Player.repository");
const game_repository_1 = require("./game.repository");
let MatchService = class MatchService {
    constructor(matchRepository) {
        this.matchRepository = matchRepository;
    }
    async createMatch(createMatchDto, player) {
        return this.matchRepository.createMatch(createMatchDto, player);
    }
    async getMatchById(id) {
        const found = await this.matchRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Match with ID "${id}" not found`);
        }
        return found;
    }
    async getMatch(FilterDto) {
        return this.matchRepository.getMatch(FilterDto);
    }
    async deleteMatch(id) {
        const del = await this.matchRepository.delete(id);
        if (!del.affected) {
            throw new common_1.NotFoundException(`Match with ID "${id}" not found`);
        }
    }
};
MatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Player_repository_1.PlayerRepository)),
    __metadata("design:paramtypes", [typeof (_a = typeof game_repository_1.MatchRepository !== "undefined" && game_repository_1.MatchRepository) === "function" ? _a : Object])
], MatchService);
exports.MatchService = MatchService;
//# sourceMappingURL=matchs.service.js.map