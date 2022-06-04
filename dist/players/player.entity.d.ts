import { BaseEntity } from "typeorm";
import { UserStatus } from "./player_status.enum";
import { Player_relation } from "../player-relations/player_relations.entity";
import { Achievement } from "../achievements/achievement.entity";
import { Match_players } from "../match-players/match-player.entity";
export declare class Player extends BaseEntity {
    id: number;
    username: string;
    avatar: string;
    level: number;
    status: UserStatus;
    two_fa: boolean;
    password: string;
    salt: string;
    pr: Player_relation[];
    mp: Match_players[];
    achievements: Achievement[];
    validatePassword(password: string): Promise<Boolean>;
}
