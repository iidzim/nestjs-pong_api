import { Player } from "./player.entity";
import { UsersService } from "./players.service";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    deleteUser(id: number): Promise<void>;
    updateUsername(id: number, username: string): Promise<Player>;
    updateAvatar(id: number, avatar: string): Promise<Player>;
    updateTwoFa(id: number): Promise<Player>;
    getUsers(FilterDto: GetPlayersFilterDto): Promise<Player[]>;
}
