import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { User } from "../../users/user.entity";
import { MatchStatus } from "../match_status.enum";

export class GetMatchFilterDto {

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsNotEmpty()
    user1: User;

    @IsOptional()
    @IsNotEmpty()
    user2: User;

    @IsOptional()
    @IsIn([MatchStatus.GAMEOVER, MatchStatus.PLAYING])
    status: MatchStatus;

}