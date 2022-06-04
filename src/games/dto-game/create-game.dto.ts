import { IsNotEmpty } from "class-validator";

export class CreateGameDto {
    
    @IsNotEmpty()
    user1: number;

}