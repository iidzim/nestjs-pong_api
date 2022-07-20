import { Response } from 'express';
import { UsersService } from '../players/players.service';
import { Player } from '../players/player.entity';
export declare class TwoFactorAuthenticationService {
    private readonly usersService;
    constructor(usersService: UsersService);
    generateTwoFactorAuthenticationSecret(user: Player): Promise<{
        secret: string;
        otpauth_url: string;
    }>;
    pipeQrCodeStream(stream: Response, otpauth_url: string): Promise<any>;
}
