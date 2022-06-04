import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player_relationRepository } from './player-relation.repository';
import { PlayerRelationController } from './player-relations.controller';
import { PlayerRelationService } from './player-relations.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player_relationRepository]),
  ],
  controllers: [PlayerRelationController],
  providers: [PlayerRelationService]
})
export class PlayerRelationModule {}
