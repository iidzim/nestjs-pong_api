import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../players/players.service';
export declare class AuthService {
    private readonly playerService;
    private jwtService;
    constructor(playerService: UsersService, jwtService: JwtService);
    login(req: any): Promise<string>;
    logout(id: number): any;
}
