import { BaseEntity } from "typeorm";
import { UserStatus } from "./player_status.enum";
export declare class Player extends BaseEntity {
    id: number;
    username: string;
    avatar: string;
    level: number;
    status: UserStatus;
    two_fa: boolean;
    password: string;
    salt: string;
    validatePassword(password: string): Promise<Boolean>;
}
