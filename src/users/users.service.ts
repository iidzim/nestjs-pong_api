import { ConsoleLogger, Injectable, NotFoundException } from "@nestjs/common";
import { User, UserStatus } from "./users.model";

@Injectable()
export class UsersService {
	private users: User[] = [];

	insertUser(id: number, username: string, avatar: string): User {
		this.duplicateUser(id, username);
		const newUser = new User(id, username, avatar, 0, 0, 0, UserStatus.ONLINE);
		this.users.push(newUser);
		return newUser;
	}

	getAllUsers(): User[] { 
		return [...this.users];
	}

	getUser(id: number): [User, number]{
		const player = this.findUser(id);
		return {...player};
	}

	updateUsername(id:number, username: string): void{
		const [userObj, userIndex] = this.findUser(id);
		const updateUsernm = {...userObj};
		if (username) {
			this.duplicateUser(id, username);
			updateUsernm.username = username;
		}
		this.users[userIndex] = updateUsernm;
	}

	updateAvatar(id:number, avatar: string): void{
		const [userObj, userIndex] = this.findUser(id);
		const updateUser = {...userObj};
		updateUser.avatar = avatar;
		this.users[userIndex] = updateUser;
	}

	updateLevel(id:number, lvl: number): void{
		const [userObj, userIndex] = this.findUser(id);
		const updateUser = {...userObj};
		if (lvl > updateUser.level) {
			updateUser.level = lvl;
		}
		this.users[userIndex] = updateUser;
	}

	updateStatus(id: number, status: string): void{
		const [userObj, userIndex] = this.findUser(id);
		const updateUser = {...userObj};
		updateUser.status = status;
		this.users[userIndex] = updateUser;
	}

	deleteUser(id: number): void{
		// const userIndex =  this.users.findIndex(player => player.id === id);
		// delete this.users[userIndex];

		this.users = this.users.filter(user => user.id !== id);
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