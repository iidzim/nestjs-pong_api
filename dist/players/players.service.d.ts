import { JwtService } from "@nestjs/jwt";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { Player } from "./player.entity";
import { PlayerRepository } from "./player.repository";
export declare class UsersService {
    private userRepository;
    private jwtService;
    constructor(userRepository: PlayerRepository, jwtService: JwtService);
    getUserById(id: number): Promise<Player>;
    getUsers(FilterDto: GetPlayersFilterDto): Promise<Player[]>;
    updateUsername(id: number, username: string): Promise<Player>;
    updateAvatar(id: number, avatar: string): Promise<Player>;
    updateTwoFa(id: number): Promise<Player>;
    deleteUser(id: number): Promise<void>;
    findOrCreate(username: string): Promise<Player>;
}
