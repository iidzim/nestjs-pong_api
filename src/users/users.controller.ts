import { Controller, Post, Get, Body, Param, Patch, Delete, ParseIntPipe, Query, ValidationPipe } from "@nestjs/common";
import { User } from "./user.entity";
import { UserStatus } from "./user_status.enum";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUsersFilterDto } from "./dto/get-user-filter.dto";

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService){}

	@Post()
	addUser(@Body() createUserDto: CreateUserDto): Promise<User> {
		return this.usersService.createUser(createUserDto);
	}

	@Get('/:id')
	getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
		return this.usersService.getUserById(id);
	}

	@Delete('/:id')
	deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.usersService.deleteUser(id);
	}

	@Patch(':id')
	updateUsername(
		@Param('id', ParseIntPipe) id: number,
		@Body('username', ) username: string,
		// @Body() createUserDto: CreateUserDto,
	){
		return this.usersService.updateUsername(id, username);
	}

	@Patch(':id')
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