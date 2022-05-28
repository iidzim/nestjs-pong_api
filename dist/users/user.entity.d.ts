import { BaseEntity } from "typeorm";
import { UserStatus } from "./user_status.enum";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    avatar: string;
    level: number;
    status: UserStatus;
}
