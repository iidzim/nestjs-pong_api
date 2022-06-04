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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const typeorm_1 = require("typeorm");
const match_player_entity_1 = require("../match-players/match-player.entity");
const game_status_enum_1 = require("./game_status.enum");
let Game = class Game extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Game.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Game.prototype, "winner", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: game_status_enum_1.GameStatus.GAMEOVER }),
    __metadata("design:type", String)
], Game.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => match_player_entity_1.Match_players, mp => mp.game, { eager: true }),
    __metadata("design:type", Array)
], Game.prototype, "mp", void 0);
Game = __decorate([
    (0, typeorm_1.Entity)('match')
], Game);
exports.Game = Game;
//# sourceMappingURL=game.entity.js.map