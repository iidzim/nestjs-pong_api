import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
// import { PlayerModule } from './players/players.module';
// import { RelationModule } from './relations/relations.module';
// import { GameModule } from './games/games.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './players/players.service';
import { PlayerModule } from './players/players.module';
import { UsersController } from './players/players.controller';

@Module({
  imports: [
    // GameModule,
    // RelationModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    PlayerModule,
  ],
  controllers: [],
  providers: [],
  // controllers: [AppController, AchievementsController],
  // providers: [AppService, UsersService, RelationsService, PlayerRelationService , AchievementsService],
})
export class AppModule {}