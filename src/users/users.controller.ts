import { Controller, Post, Get, Body, Param, Patch, Delete, ParseIntPipe, Query, ValidationPipe } from "@nestjs/common";
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto-users/create-user.dto";
import { GetUsersFilterDto } from "./dto-users/get-user-filter.dto";

@Controller('auth')
export class UsersController {
	constructor(private readonly usersService: UsersService){}

	@Post('/signup')
	signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<void> {
		console.log(createUserDto);
		return this.usersService.signUp(createUserDto);
	}

	@Post('/signin')
	signIn(@Body(ValidationPipe) createUserDto: CreateUserDto){
		return this.usersService.signIn(createUserDto);
	}

	@Get('/:id')
	getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
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
	getUsers(@Query(ValidationPipe) FilterDto: GetUsersFilterDto) {
		return this.usersService.getUsers(FilterDto);
	}
}