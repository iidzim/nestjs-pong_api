import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUsersFilterDto } from "./dto/get-user-filter.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: number): Promise<User>;
    deleteUser(id: number): Promise<void>;
    updateUsername(id: number, username: string): Promise<User>;
    updateAvatar(id: number, avatar: string): Promise<User>;
    getUsers(FilterDto: GetUsersFilterDto): Promise<User[]>;
}
