"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const players_module_1 = require("./players/players.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const relations_module_1 = require("./relations/relations.module");
const games_module_1 = require("./games/games.module");
const player_relations_module_1 = require("./player-relations/player-relations.module");
const achievements_service_1 = require("./achievements/achievements.service");
const achievements_controller_1 = require("./achievements/achievements.controller");
const achievements_module_1 = require("./achievements/achievements.module");
const players_service_1 = require("./players/players.service");
const relations_service_1 = require("./relations/relations.service");
const player_relations_service_1 = require("./player-relations/player-relations.service");
const match_players_module_1 = require("./match-players/match-players.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            players_module_1.PlayerModule,
            relations_module_1.RelationModule,
            games_module_1.MatchModule,
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            player_relations_module_1.PlayerRelationModule,
            achievements_module_1.AchievementsModule,
            match_players_module_1.MatchPlayersModule,
        ],
        controllers: [app_controller_1.AppController, achievements_controller_1.AchievementsController],
        providers: [app_service_1.AppService, players_service_1.UsersService, relations_service_1.RelationsService, player_relations_service_1.PlayerRelationService, achievements_service_1.AchievementsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map