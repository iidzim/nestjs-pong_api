import { Player } from "../players/player.entity";
import { CreateRelationDto } from "./dto-relation/create-relation.dto";
import { GetRelationFilterDto } from "./dto-relation/get-relation-filter.dto";
import { Relation } from "./relation.entity";
import { RelationsService } from "./relations.service";
export declare class RelationsController {
    private readonly relationService;
    constructor(relationService: RelationsService);
    getRelations(FilterDto: GetRelationFilterDto): Promise<Relation[]>;
    getRelationById(id: number): Promise<Relation>;
    addFriend(createRelationDto: CreateRelationDto, sender: Player): Promise<Relation>;
    blockPlayer(createRelationDto: CreateRelationDto, sender: Player): Promise<Relation>;
    deleteRelation(id: number): Promise<void>;
}
