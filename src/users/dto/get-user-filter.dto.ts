import { IsAlphanumeric, IsIn, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { UserStatus } from "../user_status.enum";

export class GetUsersFilterDto {

    
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsAlphanumeric()
    username: string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    level: number;

    @IsOptional()
    @IsIn([UserStatus.OFFLINE, UserStatus.ONLINE, UserStatus.PLAYING])
    status: UserStatus;

}