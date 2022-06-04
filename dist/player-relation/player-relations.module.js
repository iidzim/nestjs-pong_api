"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRelationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const player_relation_repository_1 = require("./player-relation.repository");
const player_relations_controller_1 = require("./player-relations.controller");
const player_relations_service_1 = require("./player-relations.service");
let PlayerRelationModule = class PlayerRelationModule {
};
PlayerRelationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([player_relation_repository_1.Player_relationRepository]),
        ],
        controllers: [player_relations_controller_1.PlayerRelationController],
        providers: [player_relations_service_1.PlayerRelationService]
    })
], PlayerRelationModule);
exports.PlayerRelationModule = PlayerRelationModule;
//# sourceMappingURL=player-relations.module.js.map