import { Module } from "@nestjs/common";
import { MatchService } from "./matchs.service";
import { MatchController } from "./matchs.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MatchRepository } from "./match.repository";
import { PlayerModule } from "../players/players.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([MatchRepository]),
        PlayerModule,
    ],
    controllers: [MatchController],
    providers: [MatchService],
})
export class MatchModule {}