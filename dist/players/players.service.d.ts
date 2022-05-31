import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "./dto-players/create-player.dto";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { Player } from "./player.entity";
import { PlayerRepository } from "./player.repository";
export declare class UsersService {
    private userRepository;
    private jwtService;
    constructor(userRepository: PlayerRepository, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<void>;
    signIn(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
    }>;
    getUserById(id: number): Promise<Player>;
    getUsers(FilterDto: GetPlayersFilterDto): Promise<Player[]>;
    updateUsername(id: number, username: string): Promise<Player>;
    updateAvatar(id: number, avatar: string): Promise<Player>;
    deleteUser(id: number): Promise<void>;
}
