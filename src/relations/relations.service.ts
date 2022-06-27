import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Player } from "../players/player.entity";
import { CreateRelationDto } from "./dto-relation/create-relation.dto";
import { GetRelationFilterDto } from "./dto-relation/get-relation-filter.dto";
import { Relation } from "./relation.entity";
import { RelationRepository } from "./relation.repository";

@Injectable()
export class RelationsService {
	constructor(
		@InjectRepository(RelationRepository)
		private relationRepository: RelationRepository,
	) {}

	async addFriend(CreateRelationDto: CreateRelationDto, sender: Player): Promise<Relation> {
		return this.relationRepository.addFriend(CreateRelationDto, sender);
	}

	async blockPlayer(CreateRelationDto: CreateRelationDto, sender: Player): Promise<Relation> {
		return this.relationRepository.blockPlayer(CreateRelationDto, sender);
	}

	// async createRelation(
	// 	CreateRelationDto: CreateRelationDto,
	// 	player: Player,
	// ): Promise<Relation> {
	// 	return this.relationRepository.createrelation(CreateRelationDto, player);
	// }

	async getRelationById(id: number): Promise<Relation> {
		const found = await this.relationRepository.findOne(id);
		if (!found){
			throw new NotFoundException(`Relation with ID "${id}" not found`)
		}
		return found;
	}

	async getRelation(FilterDto: GetRelationFilterDto):Promise<Relation[]> { 
		return this.relationRepository.getRelations(FilterDto);
	}

	async deleteRelation(id: number): Promise<void> {
		const del = await this.relationRepository.delete(id);
		if (!del.affected){
			throw new NotFoundException(`Relation with ID "${id}" not found`)
		}
	}
}