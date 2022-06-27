import { EntityRepository, Repository } from "typeorm";
import { Player } from "../players/player.entity";
import { CreateRelationDto } from "./dto-relation/create-relation.dto";
import { GetRelationFilterDto } from "./dto-relation/get-relation-filter.dto";
import { Relation } from "./relation.entity";
import { RelationStatus } from "./relation_status.enum";

@EntityRepository(Relation)
export class RelationRepository extends Repository<Relation> {

	async getRelations(FilterDto: GetRelationFilterDto): Promise<Relation[]> {
		const { id, status } = FilterDto;
		const query = this.createQueryBuilder('relation');
		if (id) {
			query.andWhere('relation.id = :id', { id });
		}
		if (status) {
			query.andWhere('relation.status = :status', { status });
		}
		const relations = await query.getMany();
		return relations;
	}

	async addFriend(createMacthDto: CreateRelationDto, sender: Player): Promise<Relation> {
		const relation = new Relation();
		// const { receiver } = CreateRelationDto;
		// relation.receiver = receiver;
		relation.sender = sender;
		relation.status = RelationStatus.FRIEND;
		await relation.save();
		return relation;
	}

	async blockPlayer(createMacthDto: CreateRelationDto, sender: Player): Promise<Relation> {
		const relation = new Relation();
		// const { receiver } = CreateRelationDto;
		// relation.receiver = receiver;
		relation.sender = sender;
		relation.status = RelationStatus.BLOCKED;
		await relation.save();
		return relation;
	}
}