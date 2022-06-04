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
exports.Match_players = void 0;
const typeorm_1 = require("typeorm");
const game_entity_1 = require("../games/game.entity");
const player_entity_1 = require("../players/player.entity");
let Match_players = class Match_players extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Match_players.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Match_players.prototype, "win", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Match_players.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => player_entity_1.Player, player => player.mp, { eager: false }),
    __metadata("design:type", player_entity_1.Player)
], Match_players.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => game_entity_1.Game, game => game.mp, { eager: false }),
    __metadata("design:type", game_entity_1.Game)
], Match_players.prototype, "game", void 0);
Match_players = __decorate([
    (0, typeorm_1.Entity)('match_player')
], Match_players);
exports.Match_players = Match_players;
//# sourceMappingURL=match-player.entity.js.map