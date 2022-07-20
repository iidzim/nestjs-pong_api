import { JwtService } from "@nestjs/jwt";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { Player } from "./player.entity";
import { PlayerRepository } from "./player.repository";
import { UserStatus } from "./player_status.enum";
export declare class UsersService {
    private userRepository;
    private jwtService;
    constructor(userRepository: PlayerRepository, jwtService: JwtService);
    getUserById(id: number): Promise<Player>;
    getUserByUsername(username: string): Promise<Player>;
    getUsers(FilterDto: GetPlayersFilterDto): Promise<Player[]>;
    updateUsername(id: number, username: string): Promise<Player>;
    updateAvatar(id: number, avatar: string): Promise<Player>;
    generateSecretQr(user: Player, res: Response): Promise<void>;
    updateLevel(id: number): Promise<Player>;
    updateStatus(id: number, status: UserStatus): Promise<Player>;
    getAchievements(id: number): Promise<any>;
    findOrCreate(id: number, login: string, email: string): Promise<Player>;
    verifyToken(token: string): Promise<Player>;
    setTwoFactorAuthenticationSecret(id: number, secret: string): Promise<void>;
    turnOnTwoFactorAuthentication(id: number): Promise<void>;
    generateTwoFactorAuthenticationSecret(user: Player): Promise<{
        secret: string;
        otpauth_url: string;
    }>;
    pipeQrCodeStream(stream: Response, otpauth_url: string): Promise<any>;
    verifyTwoFactorAuthenticationCodeValid(user: Player, code: string): Promise<boolean>;
}
