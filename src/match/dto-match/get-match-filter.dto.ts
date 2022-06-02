import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Player } from "../../players/player.entity";
import { MatchStatus } from "../match_status.enum";

export class GetMatchFilterDto {

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsNotEmpty()
    user1: number;

    @IsOptional()
    @IsNotEmpty()
    user2: number;

    @IsOptional()
    @IsIn([MatchStatus.GAMEOVER, MatchStatus.PLAYING])
    status: MatchStatus;

}