import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    avatar: string;
    wins: number;
    losses: number;
    level: number;
    status: string;
    constructor(id: number, username: string, avatar: string, wins: number, losses: number, level: number, status: string);
}
