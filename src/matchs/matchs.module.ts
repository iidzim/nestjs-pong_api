import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MatchService } from "./matchs.service";
import { MatchController } from "./matchs.controller";
import { MatchRepository } from "./match.repository";
import { PlayerModule } from '../players/players.module';
import { PlayerRepository } from "../players/player.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([MatchRepository]),
        PlayerModule,
    ],
    controllers: [MatchController],
    providers: [MatchService],
})
export class MatchModule {}