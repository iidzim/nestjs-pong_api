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
exports.Player_relation = void 0;
const typeorm_1 = require("typeorm");
const player_entity_1 = require("../players/player.entity");
const relation_entity_1 = require("../relations/relation.entity");
let Player_relation = class Player_relation extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Player_relation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => player_entity_1.Player, player => player.pr, { eager: false }),
    __metadata("design:type", Number)
], Player_relation.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => relation_entity_1.Relation, relation => relation.pr, { eager: false }),
    __metadata("design:type", Number)
], Player_relation.prototype, "relation", void 0);
Player_relation = __decorate([
    (0, typeorm_1.Entity)('player_relation')
], Player_relation);
exports.Player_relation = Player_relation;
//# sourceMappingURL=player_relation.entity.js.map