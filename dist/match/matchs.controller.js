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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchController = void 0;
const common_1 = require("@nestjs/common");
const get_player_decorator_1 = require("../players/get-player.decorator");
const player_entity_1 = require("../players/player.entity");
const create_match_dto_1 = require("./dto-match/create-match.dto");
const get_match_filter_dto_1 = require("./dto-match/get-match-filter.dto");
const matchs_service_1 = require("./matchs.service");
let MatchController = class MatchController {
    constructor(matchService) {
        this.matchService = matchService;
    }
    getUsers(FilterDto) {
        return this.matchService.getMatch(FilterDto);
    }
    getUserById(id) {
        return this.matchService.getMatchById(id);
    }
    addMatch(createMatchDto, player) {
        return this.matchService.createMatch(createMatchDto, player);
    }
    deleteUser(id) {
        return this.matchService.deleteMatch(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_match_filter_dto_1.GetMatchFilterDto]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_player_decorator_1.GetPlayer)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_match_dto_1.CreateMatchDto,
        player_entity_1.Player]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "addMatch", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "deleteUser", null);
MatchController = __decorate([
    (0, common_1.Controller)('match'),
    __metadata("design:paramtypes", [matchs_service_1.MatchService])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=matchs.controller.js.map