import { EntityRepository, Repository } from "typeorm";
import { GetPlayer } from "../players/get-player.decorator";
import { Player } from "../players/player.entity";
import { CreateRelationDto } from "./dto-relation/create-relation.dto";
import { GetRelationFilterDto } from "./dto-relation/get-relation-filter.dto";
import { Relation } from "./relation.entity";
import { RelationStatus } from "./relation_status.enum";

@EntityRepository(Relation)
export class RelationRepository extends Repository<Relation> {

	async getRelations(FilterDto: GetRelationFilterDto): Promise<Relation[]> {
		const { id, user1, user2, status } = FilterDto;
		const query = this.createQueryBuilder('relation');
		if (id) {
			query.andWhere('relation.id = :id', { id });
		}
		if (user1) {
			query.andWhere('relation.user1 = :user1', { user1 });
		}
		if (user2) {
			query.andWhere('relation.user2 = :user2', { user2 });
		}
		if (status) {
			query.andWhere('relation.status = :status', { status });
		}
		const relations = await query.getMany();
		return relations;
	}

	async createrelation(
		createMacthDto: CreateRelationDto,
		player: Player,
	): Promise<Relation> {
		const { user1, user2 } = createMacthDto;
		const relation = new Relation();
		relation.user1 = user1;
		relation.user2 = player;
		relation.status = RelationStatus.NONE;
		await relation.save();
		return relation;
	}
}