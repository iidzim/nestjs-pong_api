import { Player } from "../players/player.entity";
import { GetRelationFilterDto } from "./dto-relation/get-relation-filter.dto";
import { Relation } from "./relation.entity";
import { RelationsService } from "./relations.service";
export declare class RelationsController {
    private readonly relationService;
    constructor(relationService: RelationsService);
    getRelations(FilterDto: GetRelationFilterDto): Promise<Relation[]>;
    getRelationByUser(player: Player): Promise<Relation[]>;
    addFriend(recv_id: number, sender: Player): Promise<Relation>;
    blockPlayer(recv_id: number, sender: Player): Promise<Relation>;
}
