import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
// import { RelationModule } from './relations/relations.module';
// import { GameModule } from './games/games.module';
import { AuthModule } from './auth/auth.module';
import { PlayerModule } from './players/players.module';

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
})
export class AppModule {}