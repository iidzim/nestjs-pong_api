import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { RelationModule } from './relations/relations.module';
import { MatchModule } from './games/games.module';
import { PlayerRelationModule } from './player-relations/player-relations.module';
import { AchievementsService } from './achievements/achievements.service';
import { AchievementsController } from './achievements/achievements.controller';
import { AchievementsModule } from './achievements/achievements.module';
import { UsersService } from './players/players.service';
import { RelationsService } from './relations/relations.service';
import { PlayerRelationService } from './player-relations/player-relations.service';
import { MatchPlayersModule } from './match-players/match-players.module';

@Module({
  imports: [
    PlayerModule,
    RelationModule,
    MatchModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    PlayerRelationModule,
    AchievementsModule,
    MatchPlayersModule,
  ],
  controllers: [AppController, AchievementsController],
  providers: [AppService, UsersService, RelationsService, PlayerRelationService , AchievementsService],
})
export class AppModule {}