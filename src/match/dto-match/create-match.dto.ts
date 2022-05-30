import { IsNotEmpty } from "class-validator";
import { User } from "../../users/user.entity";

export class CreateMatchDto {
    
    @IsNotEmpty()
    user1: User;

    @IsNotEmpty()
    user2: number;
}