import { Module } from '@nestjs/common';
import { PlayerModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { RelationModule } from './relations/relations.module';
import { GameModule } from './games/games.module';
import { PlayerRelationModule } from './player-relations/player-relations.module';
import { AchievementsModule } from './achievements/achievements.module';
import { MatchPlayersModule } from './match-players/match-players.module';

@Module({
  imports: [
    AchievementsModule,
    GameModule,
    MatchPlayersModule,
    PlayerRelationModule,
    PlayerModule,
    RelationModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  // controllers: [AppController, AchievementsController],
  // providers: [AppService, UsersService, RelationsService, PlayerRelationService , AchievementsService],
})
export class AppModule {}