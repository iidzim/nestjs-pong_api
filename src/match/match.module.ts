import { Module } from "@nestjs/common";
import { MatchService } from "./match.service";
import { MatchController } from "./match.controller";

@Module({
    imports: [],
    controllers: [MatchController],
    providers: [MatchService],
})
export class MatchModule {}