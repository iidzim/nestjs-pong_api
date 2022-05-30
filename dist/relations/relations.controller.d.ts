import { CreateRelationDto } from "./dto-relation/create-relation.dto";
import { GetRelationFilterDto } from "./dto-relation/get-relation-filter.dto";
import { Relation } from "./relation.entity";
import { RelationsService } from "./relations.service";
export declare class RelationsController {
    private readonly relationService;
    constructor(relationService: RelationsService);
    addMatch(createMatchDto: CreateRelationDto): Promise<Relation>;
    getUserById(id: number): Promise<Relation>;
    deleteUser(id: number): Promise<void>;
    getUsers(FilterDto: GetRelationFilterDto): Promise<Relation[]>;
}
