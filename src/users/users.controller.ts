import { Controller, Post, Get, Body, Param, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService){}

	@Post()
	addUser(
		@Body('id') id: string,
		@Body('username') username: string,
		@Body('avatar') avatar: string
	): any {
		this.usersService.insertUser(id, username, avatar);
	}

	@Get()
	getAllUsers() {
		return this.usersService.getAllUsers();
	}

	@Get(':id')
	getUser(@Param(':id') login: string){
		return this.usersService.getUser(login);
	}

	@Patch(':id')
	updateUsername(
		@Param(':id') id:string, 
		@Param(':username') username:string
	) {
		this.usersService.updateUsername(id, username);
		return null;
	}

}