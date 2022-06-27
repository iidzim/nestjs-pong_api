import { Repository } from "typeorm";
import { Player } from "../players/player.entity";
import { CreateRelationDto } from "./dto-relation/create-relation.dto";
import { GetRelationFilterDto } from "./dto-relation/get-relation-filter.dto";
import { Relation } from "./relation.entity";
export declare class RelationRepository extends Repository<Relation> {
    getRelations(FilterDto: GetRelationFilterDto): Promise<Relation[]>;
    addFriend(createMacthDto: CreateRelationDto, sender: Player): Promise<Relation>;
    blockPlayer(createMacthDto: CreateRelationDto, sender: Player): Promise<Relation>;
}
