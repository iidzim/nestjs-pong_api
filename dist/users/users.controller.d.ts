import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto-users/create-user.dto";
import { GetUsersFilterDto } from "./dto-users/get-user-filter.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUp(createUserDto: CreateUserDto): Promise<void>;
    getUserById(id: number): Promise<User>;
    deleteUser(id: number): Promise<void>;
    updateUsername(id: number, username: string): Promise<User>;
    updateAvatar(id: number, avatar: string): Promise<User>;
    getUsers(FilterDto: GetUsersFilterDto): Promise<User[]>;
}
