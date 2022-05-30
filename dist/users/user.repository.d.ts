import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto-users/create-user.dto";
import { GetUsersFilterDto } from "./dto-users/get-user-filter.dto";
export declare class UserRepository extends Repository<User> {
    getUsers(FilterDto: GetUsersFilterDto): Promise<User[]>;
    signUp(createUserDto: CreateUserDto): Promise<void>;
}
