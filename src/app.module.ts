import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { RelationModule } from './relations/relations.module';
import { MatchModule } from './matchs/matchs.module';

@Module({
  imports: [
    PlayerModule,
    RelationModule,
    MatchModule,
    TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}