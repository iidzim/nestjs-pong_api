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
exports.Match = void 0;
const typeorm_1 = require("typeorm");
const player_entity_1 = require("../players/player.entity");
const match_status_enum_1 = require("./match_status.enum");
let Match = class Match extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Match.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", player_entity_1.Player)
], Match.prototype, "user1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Match.prototype, "user2", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Match.prototype, "winner", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Match.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: match_status_enum_1.MatchStatus.GAMEOVER }),
    __metadata("design:type", String)
], Match.prototype, "status", void 0);
Match = __decorate([
    (0, typeorm_1.Entity)()
], Match);
exports.Match = Match;
//# sourceMappingURL=match.entity.js.map