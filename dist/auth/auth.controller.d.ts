import { AuthService } from './auth.service';
import { Player } from '../players/player.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    FortyTwoAuth(req: any): Promise<"no user from 42" | Player>;
}
