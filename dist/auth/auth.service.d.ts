import { UsersService } from '../players/players.service';
export declare class AuthService {
    private readonly playerService;
    constructor(playerService: UsersService);
    login(req: any): Promise<"no user from 42" | import("../players/player.entity").Player>;
    logout(id: number): any;
}
