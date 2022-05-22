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
		return {id: id};
	}

	@Get()
	getAllUsers() {
		return this.usersService.getAllUsers();
	}

	@Get(':id')
	getUser(@Param(':id') login: string){
		console.log("id = " + login);
		return this.usersService.getUser(login);
	}

	@Patch(':id')
	updateUsername(
		@Param('id') id:string,
		@Body('username') username:string
	) {
		this.usersService.updateUsername(id, username);
		return null;
	}

	@Patch(':id')
	updateAvatar(
		@Param('id') id:string,
		@Body('avatar') avatar:string
	) {
		this.usersService.updateAvatar(id, avatar);
		return null;
	}
}

