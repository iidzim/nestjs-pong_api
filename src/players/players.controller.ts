import { Controller, Post, Get, Body, Param, Patch, Delete, ParseIntPipe, Query, ValidationPipe, UseGuards, Req } from "@nestjs/common";
import { Player } from "./player.entity";
import { UsersService } from "./players.service";
import { CreateUserDto } from "./dto-players/create-player.dto";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class UsersController {
	constructor(private readonly usersService: UsersService){}

	@Post('/signup')
	signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<void> {
		return this.usersService.signUp(createUserDto);
	}

	@Post('/signin')
	signIn(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<{ accessToken: string }>{
		return this.usersService.signIn(createUserDto);
	}

	@Post('/test')
	@UseGuards(AuthGuard())
	test(@Req() req) {
		console.log(req);
	}

	@Get('/:id')
	getUserById(@Param('id', ParseIntPipe) id: number): Promise<Player> {
		return this.usersService.getUserById(id);
	}

	@Delete('/:id')
	deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.usersService.deleteUser(id);
	}

	@Patch('/editprofile/username/:id')
	updateUsername(
		@Param('id', ParseIntPipe) id: number,
		@Body('username', ) username: string,
		// @Body() createUserDto: CreateUserDto,
	){
		return this.usersService.updateUsername(id, username);
	}

	@Patch('/editprofile/avatar/:id')
	updateAvatar(
		@Param('id', ParseIntPipe) id: number,
		@Body('avatar', ) avatar: string,
	){
		return this.usersService.updateAvatar(id, avatar);
	}

	@Get()
	getUsers(@Query(ValidationPipe) FilterDto: GetPlayersFilterDto) {
		return this.usersService.getUsers(FilterDto);
	}
}