import { Player } from "./player.entity";
import { UsersService } from "./players.service";
import { CreateUserDto } from "./dto-players/create-player.dto";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUp(createUserDto: CreateUserDto): Promise<void>;
    signIn(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
    }>;
    getUserById(id: number): Promise<Player>;
    deleteUser(id: number): Promise<void>;
    updateUsername(id: number, username: string): Promise<Player>;
    updateAvatar(id: number, avatar: string): Promise<Player>;
    getUsers(FilterDto: GetPlayersFilterDto): Promise<Player[]>;
}