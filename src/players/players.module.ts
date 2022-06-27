import { Module } from '@nestjs/common';
import { UsersController } from "./players.controller";
import { UsersService } from "./players.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './player.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([PlayerRepository]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class PlayerModule {}