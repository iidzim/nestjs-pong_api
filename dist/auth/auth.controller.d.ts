import { AuthService } from './auth.service';
import { Player } from '../players/player.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(): Promise<any>;
    logout(player: Player): any;
}
