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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const player_entity_1 = require("./player.entity");
const players_service_1 = require("./players.service");
const get_player_filter_dto_1 = require("./dto-players/get-player-filter.dto");
const relations_service_1 = require("../relations/relations.service");
const get_player_decorator_1 = require("./get-player.decorator");
const passport_1 = require("@nestjs/passport");
let UsersController = class UsersController {
    constructor(usersService, relationService) {
        this.usersService = usersService;
        this.relationService = relationService;
    }
    getProfile(player) {
        const playerData = this.usersService.getUserById(player.id);
        const achievements = this.usersService.getAchievements(player.id);
        const data = {
            "profile": playerData,
            "achievements": achievements,
        };
        return data;
    }
    getFriendProfile(id) {
        const playerData = this.usersService.getUserById(id);
        const achievements = this.usersService.getAchievements(id);
        const data = {
            "profile": playerData,
            "achievements": achievements,
        };
        return data;
    }
    updateUsername(player, username) {
        return this.usersService.updateUsername(player.id, username);
    }
    updateAvatar(player, avatar) {
        return this.usersService.updateAvatar(player.id, avatar);
    }
    updateTwoFa(player) {
        return this.usersService.updateTwoFa(player.id);
    }
    getUsers(FilterDto) {
        return this.usersService.getUsers(FilterDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Redirect)('https://api.intra.42.fr/oauth/authorize?client_id=586c1c8fde913cc2d625042e39cd449c79a3c386dce871f6e55caa110796bc56&redirect_uri=http%3A%2F%2F127.0.0.1%3A3001%2Fauth%2Flogin&response_type=code', 301),
    (0, common_1.Get)('/profile'),
    __param(0, (0, get_player_decorator_1.GetPlayer)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_entity_1.Player]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('/profile/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getFriendProfile", null);
__decorate([
    (0, common_1.Patch)('/settings/username/:id'),
    __param(0, (0, get_player_decorator_1.GetPlayer)()),
    __param(1, (0, common_1.Body)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_entity_1.Player, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUsername", null);
__decorate([
    (0, common_1.Patch)('/settings/avatar/:id'),
    __param(0, (0, get_player_decorator_1.GetPlayer)()),
    __param(1, (0, common_1.Body)('avatar')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_entity_1.Player, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateAvatar", null);
__decorate([
    (0, common_1.Patch)('/settings/2fa/:id'),
    __param(0, (0, get_player_decorator_1.GetPlayer)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_entity_1.Player]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateTwoFa", null);
__decorate([
    (0, common_1.Get)('/users'),
    __param(0, (0, common_1.Query)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_player_filter_dto_1.GetPlayersFilterDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
UsersController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [players_service_1.UsersService,
        relations_service_1.RelationsService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=players.controller.js.map