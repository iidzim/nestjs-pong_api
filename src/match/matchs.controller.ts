import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { GetPlayer } from "../players/get-player.decorator";
import { Player } from "../players/player.entity";
import { CreateMatchDto } from "./dto-match/create-match.dto";
import { GetMatchFilterDto } from "./dto-match/get-match-filter.dto";
import { Match } from "./match.entity";
import { MatchService } from "./matchs.service";

@Controller('match')
export class MatchController {
	constructor(private readonly matchService: MatchService){}

	@Get()
	getUsers(@Query(ValidationPipe) FilterDto: GetMatchFilterDto) {
		return this.matchService.getMatch(FilterDto);
	}

	@Get('/:id')
	getUserById(@Param('id', ParseIntPipe) id: number): Promise<Match> {
		return this.matchService.getMatchById(id);
	}

	@Post()
	@UsePipes(ValidationPipe)
	addMatch(
		@Body() createMatchDto: CreateMatchDto,
		@GetPlayer() player: Player,
	): Promise<Match> {
		return this.matchService.createMatch(createMatchDto, player);
	}

	@Delete('/:id')
	deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.matchService.deleteMatch(id);
	}

}
