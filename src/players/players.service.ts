import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/croodles';
import { InjectRepository } from "@nestjs/typeorm";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { Player } from "./player.entity";
import { PlayerRepository } from "./player.repository";
import { UserStatus } from "./player_status.enum";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(PlayerRepository)
		private userRepository: PlayerRepository,
	) {}

	// async signUp(createUserDto: CreateUserDto): Promise<void> {
	// 	return this.userRepository.signUp(createUserDto);
	// }

	// async signIn(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
	// 	const username = await this.userRepository.validateUserPassword(createUserDto);
	// 	if (!username) {
	// 		throw new UnauthorizedException('Invalid credentials')
	// 	}
	
	// 	const payload: JwtPayload = { username };
	// 	const accessToken = await this.jwtService.sign(payload);
	// 	return { accessToken };
	// }

	async getUserById(id: number): Promise<Player> {
		const found = await this.userRepository.findOne(id);
		if (!found){
			throw new NotFoundException(`User with ID "${id}" not found`);
		}
		return found;
	}

	async getUsers(FilterDto: GetPlayersFilterDto):Promise<Player[]> {
		return this.userRepository.getUsers(FilterDto);
	}

	async updateUsername(id: number, username: string): Promise<Player> {
		const updated = await this.getUserById(id);
		updated.username = username;
		await updated.save();
		return updated;
	}

	async updateAvatar(id: number, avatar: string): Promise<Player> {
		const updated = await this.getUserById(id);
		updated.avatar = avatar;
		await updated.save();
		return updated;
	}

	async updateTwoFa(id: number): Promise<Player> {
		const updated = await this.getUserById(id);
		updated.two_fa = true;
		//& enable 2fa
		await updated.save();
		return updated;
	}

	async updateLevel(id: number): Promise<Player> {
		const updated = await this.getUserById(id);
		updated.level += 0.125;
		await updated.save();
		return updated;
	}

	async StatusPlaying(id: number): Promise<Player> {
		const updated = await this.getUserById(id);
		updated.status = UserStatus.PLAYING;
		await updated.save();
		return updated;
	}

	async StatusOffline(id: number): Promise<Player> {
		const updated = await this.getUserById(id);
		updated.status = UserStatus.OFFLINE;
		await updated.save();
		return updated;
	}

	// async deleteUser(id: number): Promise<void> {
	// 	const del = await this.userRepository.delete(id);
	// 	if (!del.affected){
	// 		throw new NotFoundException(`User with ID "${id}" not found`)
	// 	}
	// }

	async findOrCreate(id: string, login: string): Promise<Player> {
		console.log("find or create > number of arguments passed: ", arguments.length);
		console.log(id, login);
		const found = await this.userRepository.findOne({ where: { id } });
		if (found) {
			console.log('found !!');
			return found;
		}
		console.log('not found !!');
		const newUser = new Player();
		newUser.id = id;
		newUser.username = login;
		newUser.avatar = createAvatar(style, {seed: login + '.svg'});
		newUser.level = 0.0;
		newUser.status = UserStatus.ONLINE;
		newUser.two_fa = false;
		await newUser.save();
		console.log('new User saved successfully ' + newUser);
		if (typeof(newUser) == 'undefined') {
			console.log('newUser is undefined');
		}
		return newUser;
	}

}
