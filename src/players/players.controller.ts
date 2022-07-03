import { Controller, Post, Get, Body, Param, Patch, Delete, ParseIntPipe, Query, ValidationPipe, UseGuards, Req, Inject, forwardRef, Redirect, Request } from "@nestjs/common";
import { Player } from "./player.entity";
import { UsersService } from "./players.service";
import { CreateUserDto } from "./dto-players/create-player.dto";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { RelationsService } from "../relations/relations.service";
import { GetPlayer } from "./get-player.decorator";
import { AuthGuard } from "@nestjs/passport";
import { RelationStatus } from "../relations/relation_status.enum";
import { request, Request } from "express";
// import { GetPlayer } from "./get-player.decorator";

@Controller()
// @UseGuards(LocalAuthGuard))
// @UseGuards(AuthGuard())
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

	// @Get()
	// @Redirect('https://api.intra.42.fr/oauth/authorize?client_id=586c1c8fde913cc2d625042e39cd449c79a3c386dce871f6e55caa110796bc56&redirect_uri=http%3A%2F%2F127.0.0.1%3A3001%2Fauth%2Flogin&response_type=code', 301)
	// test() {}

	@Get('cookies')
	getCookies(@Request() req : Request) {
		console.log(req.cookies);
	}
	//- get logged user profile
	@Get('/profile')
	getProfile(@Request() req : Request,
		@GetPlayer() player: Player,
	){
		//***
		// console.log('cookies ------ ' + req.cookies);

		// const id
		const playerData = this.usersService.getUserById(player.id);
		// const friends = this.relationService.getRelationByUser(id, RelationStatus.FRIEND);
		const achievements = this.usersService.getAchievements(player.id);
		// const matchHistory = this.gameService.getMatchByUser(id);
		const data = {
			"profile": playerData,
			// "friends": friends,
			"achievements": achievements,
			// "matchHistory": matchHistory,
		};
		return data;
	}

	//- get friend profile
	@Get('/profile/:id')
	getFriendProfile(
		@Param('id', ParseIntPipe) id: number
	){
		const playerData = this.usersService.getUserById(id);
		// const friends = this.relationService.getRelationByUser(id, RelationStatus.FRIEND); //+ loop over relations array, get friends id
		const achievements = this.usersService.getAchievements(id);
		// const matchHistory = this.gameService.getMatchByUser(id);
		const data = {
			"profile": playerData,
			// "friends": friends,
			"achievements": achievements,
			// "matchHistory": matchHistory,
		};
		return data;
	}

	//- update username
	@Patch('/settings/username/:id')
	updateUsername(
		@GetPlayer() player: Player,
		@Body('username') username: string,
	){
		return this.usersService.updateUsername(player.id, username);
	}

	//- update avatar
	@Patch('/settings/avatar/:id')
	updateAvatar(
		@GetPlayer() player: Player,
		@Body('avatar') avatar: string,
	){
		return this.usersService.updateAvatar(player.id, avatar);
	}

	//- enaable two factor authentication
	@Patch('/settings/2fa/:id')
	updateTwoFa(
		// @Param('id', ParseIntPipe) id: number,
		@GetPlayer() player: Player,
	){
		return this.usersService.updateTwoFa(player.id);
	}
       
	// get all users - remove later...
	@Get('/users')
	getUsers(@Query(ValidationPipe) FilterDto: GetPlayersFilterDto) {
		console.log("start ");
		return this.usersService.getUsers(FilterDto);
	}
}