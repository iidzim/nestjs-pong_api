import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUsersFilterDto } from "./dto/get-user-filter.dto";
export declare class UserRepository extends Repository<User> {
    getUsers(FilterDto: GetUsersFilterDto): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
