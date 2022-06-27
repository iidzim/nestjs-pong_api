import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { Player } from "./player.entity";
import { PlayerRepository } from "./player.repository";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: PlayerRepository);
    getUserById(id: number): Promise<Player>;
    getUsers(FilterDto: GetPlayersFilterDto): Promise<Player[]>;
    updateUsername(id: number, username: string): Promise<Player>;
    updateAvatar(id: number, avatar: string): Promise<Player>;
    updateTwoFa(id: number): Promise<Player>;
    updateLevel(id: number): Promise<Player>;
    StatusPlaying(id: number): Promise<Player>;
    StatusOffline(id: number): Promise<Player>;
    findOrCreate(id: string, login: string): Promise<Player>;
}
