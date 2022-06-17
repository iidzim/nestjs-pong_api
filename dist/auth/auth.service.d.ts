import { UsersService } from '../players/players.service';
export declare class AuthService {
    private readonly playerService;
    constructor(playerService: UsersService);
    login(): any;
    callback(): any;
    logout(): any;
}
