import { Repository } from "typeorm";
import { Player_relation } from "./player_relations.entity";
export declare class Player_relationRepository extends Repository<Player_relation> {
    createPR(): Promise<Player_relation>;
}
