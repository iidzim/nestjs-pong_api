import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from "@nestjs/common";
import { CreateRelationDto } from "./dto-relation/create-relation.dto";
import { GetRelationFilterDto } from "./dto-relation/get-relation-filter.dto";
import { Relation } from "./relation.entity";
import { RelationsService } from "./relations.service";

@Controller()
export class RelationsController {
	constructor(private readonly relationService: RelationsService){}

	@Post()
	addMatch(@Body() createMatchDto: CreateRelationDto): Promise<Relation> {
		return this.relationService.createRelation(createMatchDto);
	}

	@Get('/:id')
	getUserById(@Param('id', ParseIntPipe) id: number): Promise<Relation> {
		return this.relationService.getRelationById(id);
	}

	@Delete('/:id')
	deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.relationService.deleteRelation(id);
	}

	@Get()
	getUsers(@Query(ValidationPipe) FilterDto: GetRelationFilterDto) {
		return this.relationService.getRelation(FilterDto);
	}
}