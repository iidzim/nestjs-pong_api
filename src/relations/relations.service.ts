import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
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

	async createRelation(CreateRelationDto: CreateRelationDto): Promise<Relation> {
		return this.relationRepository.createrelation(CreateRelationDto);
	}

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