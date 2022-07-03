import { Player } from "./player.entity";
import { UsersService } from "./players.service";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { RelationsService } from "../relations/relations.service";
export declare class UsersController {
    private readonly usersService;
    private readonly relationService;
    constructor(usersService: UsersService, relationService: RelationsService);
    getCookies(req: Request): void;
    getProfile(req: Request, player: Player): {
        profile: Promise<Player>;
        achievements: Promise<any>;
    };
    getFriendProfile(id: number): {
        profile: Promise<Player>;
        achievements: Promise<any>;
    };
    updateUsername(player: Player, username: string): Promise<Player>;
    updateAvatar(player: Player, avatar: string): Promise<Player>;
    updateTwoFa(player: Player): Promise<Player>;
    getUsers(FilterDto: GetPlayersFilterDto): Promise<Player[]>;
}
