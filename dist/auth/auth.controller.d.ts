import { AuthService } from './auth.service';
import { Player } from '../players/player.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logout(player: Player): any;
    FortyTwoAuth(req: any): Promise<string>;
}
