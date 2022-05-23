import { ConsoleLogger, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./users.model";

@Injectable()
export class UsersService {
	private users: User[] = [];

	insertUser(id: number, username: string, avatar: string){
		this.duplicateUser(id, username);
		const newUser = new User(id, username, avatar, 0, 0, 0, 'online');
		this.users.push(newUser);
		return id;
	}

	getAllUsers(){
		return [...this.users];
	}

	getUser(id: number){
		const player = this.findUser(id);
		return {...player};
	}

	updateUsername(id:number, username: string){
		const [userObj, userIndex] = this.findUser(id);
		const updateUsernm = {...userObj};
		if (username) {
			this.duplicateUser(id, username);
			updateUsernm.username = username;
		}
		this.users[userIndex] = updateUsernm;
	}

	updateAvatar(id:number, avatar: string){
		const [userObj, userIndex] = this.findUser(id);
		const updateUser = {...userObj};
		updateUser.avatar = avatar;
		this.users[userIndex] = updateUser;
	}

	updateLevel(id:number, lvl: number){
		const [userObj, userIndex] = this.findUser(id);
		const updateUser = {...userObj};
		if (lvl > updateUser.level) {
			updateUser.level = lvl;
		}
		this.users[userIndex] = updateUser;
	}

	updateStatus(id:number, status: string){
		const [userObj, userIndex] = this.findUser(id);
		const updateUser = {...userObj};
		updateUser.status = status;
		this.users[userIndex] = updateUser;
	}

	private findUser(id:number): [User, number] {

		const userIndex =  this.users.findIndex(player => player.id === id);
		const userObj = this.users[userIndex];
		if (!userObj) {
			throw new NotFoundException('Could not find user');
		}
		return [userObj, userIndex];
	}

	private duplicateUser(id: number, username: string){
		const usernm = this.users.find(player => player.username === username);
		if (usernm) {
			throw new NotFoundException('username already taken !');
		}
	}
}