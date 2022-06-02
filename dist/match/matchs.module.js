"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchModule = void 0;
const common_1 = require("@nestjs/common");
const matchs_service_1 = require("./matchs.service");
const matchs_controller_1 = require("./matchs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const match_repository_1 = require("./match.repository");
const players_module_1 = require("../players/players.module");
let MatchModule = class MatchModule {
};
MatchModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([match_repository_1.MatchRepository]),
            players_module_1.PlayerModule,
        ],
        controllers: [matchs_controller_1.MatchController],
        providers: [matchs_service_1.MatchService],
    })
], MatchModule);
exports.MatchModule = MatchModule;
//# sourceMappingURL=matchs.module.js.map