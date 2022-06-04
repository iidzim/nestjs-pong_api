import { BaseEntity } from "typeorm";
export declare class Player_relation extends BaseEntity {
    id: number;
    user: number;
    relation: number;
}
