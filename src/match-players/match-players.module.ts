import { Module } from '@nestjs/common';
import { MatchPlayersService } from './match-players.service';
import { MatchPlayersController } from './match-players.controller';

@Module({
  providers: [MatchPlayersService],
  controllers: [MatchPlayersController]
})
export class MatchPlayersModule {}
