import { CreateUserDto } from "./dto/create-user.dto";
import { GetUsersFilterDto } from "./dto/get-user-filter.dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: number): Promise<User>;
    getUsers(FilterDto: GetUsersFilterDto): Promise<User[]>;
    updateUsername(id: number, username: string): Promise<User>;
    updateAvatar(id: number, avatar: string): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
