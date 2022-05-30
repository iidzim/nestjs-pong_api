import { IsNotEmpty } from "class-validator";
import { User } from "../../users/user.entity";

export class CreateRelationDto {

    @IsNotEmpty()
    user1: User;

    @IsNotEmpty()
    user2: number;
}