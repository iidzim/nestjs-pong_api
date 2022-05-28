import { BaseEntity } from "typeorm";
import { Match } from '../match/Match.model';
import { Relation } from '../relations/relation.model';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    avatar: string;
    level: number;
    status: UserStatus;
    matchs: Match[];
    relations: Relation[];
    constructor(id: number, username: string, avatar: string, wins: number, losses: number, level: number, status: UserStatus);
}
export declare enum UserStatus {
    ONLINE = "online",
    OFFLINE = "offline",
    PLAYING = "playing"
}
