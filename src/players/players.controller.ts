import { Controller, Post, Get, Body, Param, Patch, Delete, ParseIntPipe, Query, ValidationPipe, UseGuards, Req, Inject, forwardRef } from "@nestjs/common";
import { Player } from "./player.entity";
import { UsersService } from "./players.service";
import { CreateUserDto } from "./dto-players/create-player.dto";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { RelationsService } from "../relations/relations.service";
import { GetPlayer } from "./get-player.decorator";
import { AuthGuard } from "@nestjs/passport";
import { RelationStatus } from "../relations/relation_status.enum";
// import { GetPlayer } from "./get-player.decorator";

@Controller()
export class UsersController {
	constructor(
		// @Inject(forwardRef( () => RelationsService))
		private readonly usersService: UsersService,
		private readonly relationService: RelationsService,
		// private readonly gameService: GameService,
	){}

	// @Post('/signup')
	// signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<void> {
	// 	return this.usersService.signUp(createUserDto);
	// }

	// @Post('/signin')
	// signIn(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<{ accessToken: string }>{
	// 	return this.usersService.signIn(createUserDto);
	// }

	// @Get('profile/:id')
	// getProfile(@Param('id', ParseIntPipe) id: number): Promise<any> {
	// 	// return this.usersService.getUserById(id);
	// }

	@Get('/profile')
	getProfile(
		// @Param('id', ParseIntPipe) id: number,
		@GetPlayer() player: Player,
	){
		const playerData = this.usersService.getUserById(player.id);
		const friends = this.relationService.getRelationByUser(player.id, RelationStatus.FRIEND);
		// const matchHistory = this.gameService.getMatchByUser(player);
		const data = {
			"profile": playerData,
			"friends": friends,
			// "matchHistory": matchHistory,
		};
		return data;
	}

	@Get('/profile/:id')
	getFriendProfile(
		@Param('id', ParseIntPipe) id: number,
	){
		const playerData = this.usersService.getUserById(id);
		const friends = this.relationService.getRelationByUser(id, RelationStatus.FRIEND);
		// const matchHistory = this.gameService.getMatchByUser(player);
		const data = {
			"profile": playerData,
			"friends": friends,
			// "matchHistory": matchHistory,
		};
		return data;
	}

	@Patch('/settings/username/:id')
	updateUsername(
		@GetPlayer() player: Player,
		@Body('username', ) username: string,
	){
		return this.usersService.updateUsername(player.id, username);
	}

	@Patch('/settings/avatar/:id')
	updateAvatar(
		@GetPlayer() player: Player,
		@Body('avatar', ) avatar: string,
	){
		return this.usersService.updateAvatar(player.id, avatar);
	}

	@Patch('/settings/2fa/:id')
	updateTwoFa(
		// @Param('id', ParseIntPipe) id: number,
		@GetPlayer() player: Player,
	){
		return this.usersService.updateTwoFa(player.id);
	}

	@Get()
	getUsers(@Query(ValidationPipe) FilterDto: GetPlayersFilterDto) {
		return this.usersService.getUsers(FilterDto);
	}
}