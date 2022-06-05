import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetPlayer } from "../players/get-player.decorator";
import { Player } from "../players/player.entity";
import { CreateRelationDto } from "./dto-relation/create-relation.dto";
import { GetRelationFilterDto } from "./dto-relation/get-relation-filter.dto";
import { Relation } from "./relation.entity";
import { RelationsService } from "./relations.service";

@Controller('link')
@UseGuards(AuthGuard())
export class RelationsController {
	constructor(private readonly relationService: RelationsService){}

	@Get()
	getRelations(@Query(ValidationPipe) FilterDto: GetRelationFilterDto) {
		return this.relationService.getRelation(FilterDto);
	}

	@Get('/:id')
	getRelationById(@Param('id', ParseIntPipe) id: number): Promise<Relation> {
		return this.relationService.getRelationById(id);
	}

	@Post()
	@UsePipes(ValidationPipe)
	addRelation(@Body() createRelationDto: CreateRelationDto): Promise<Relation> {
		return this.relationService.createRelation(createRelationDto);
	}
	// @Post()
	// @UsePipes(ValidationPipe)
	// addRelation(
	// 	@Body() createRelationDto: CreateRelationDto,
	// 	@GetPlayer() player: Player,
	// ): Promise<Relation> {
	// 	return this.relationService.createRelation(createRelationDto, player);
	// }

	@Delete('/:id')
	deleteRelation(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.relationService.deleteRelation(id);
	}

}