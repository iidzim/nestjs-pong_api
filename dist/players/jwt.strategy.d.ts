import { JwtPayload } from "./jwt-payload.interface";
import { Player } from "./player.entity";
import { PlayerRepository } from "./player.repository";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private playerRepository;
    constructor(playerRepository: PlayerRepository);
    validate(payload: JwtPayload): Promise<Player>;
}
export {};
