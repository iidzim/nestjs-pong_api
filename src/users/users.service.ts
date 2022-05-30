import { ConsoleLogger, Injectable, NotFoundException, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto-users/create-user.dto";
import { GetUsersFilterDto } from "./dto-users/get-user-filter.dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import { UserStatus } from "./user_status.enum";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UserRepository)
		private userRepository: UserRepository,
	) {}

	async createUser(createUserDto: CreateUserDto): Promise<User> {
		return this.userRepository.createUser(createUserDto);
	}

	async getUserById(id: number): Promise<User> {
		const found = await this.userRepository.findOne(id);
		if (!found){
			throw new NotFoundException(`User with ID "${id}" not found`)
		}
		return found;
	}

	async getUsers(FilterDto: GetUsersFilterDto):Promise<User[]> { 
		return this.userRepository.getUsers(FilterDto);
	}

	async updateUsername(id: number, username: string): Promise<User> {
		const updated = await this.getUserById(id);
		updated.username = username;
		await updated.save();
		return updated;
	}

	async updateAvatar(id: number, avatar: string): Promise<User> {
		const updated = await this.getUserById(id);
		updated.avatar = avatar;
		await updated.save();
		return updated;
	}

	async deleteUser(id: number): Promise<void> {
		const del = await this.userRepository.delete(id);
		if (!del.affected){
			throw new NotFoundException(`User with ID "${id}" not found`)
		}
	}
}