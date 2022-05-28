import { IsAlphanumeric, IsNotEmpty, IsOptional } from "class-validator";

export class GetUsersFilterDto {

    @IsOptional()
    @IsAlphanumeric()
    username: string;

    @IsOptional()
    @IsNotEmpty()
    avatar: string;
}