import { Controller, Post, Get, Body, Param, Patch, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService){}

	@Post()
	addUser(
		@Body('id') id: number,
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
	getUser(@Param(':id') id: number){
		// console.log("id = " + id);
		return this.usersService.getUser(id);
	}

	@Patch(':id')
	updateUsername(
		@Param('id') id:number,
		@Body('username') username:string
	) {
		this.usersService.updateUsername(id, username);
		return null;
	}

	@Patch(':id')
	updateAvatar(
		@Param('id') id:number,
		@Body('avatar') avatar:string
	) {
		this.usersService.updateAvatar(id, avatar);
		return null;
	}

	@Delete(':id')
	deleteUser(@Param('id') id:number): void {
		this.usersService.deleteUser(id);
	}
}

