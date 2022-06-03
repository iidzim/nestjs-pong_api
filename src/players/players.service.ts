import { ConsoleLogger, Injectable, NotFoundException, Param, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto-players/create-player.dto";
import { GetPlayersFilterDto } from "./dto-players/get-player-filter.dto";
import { JwtPayload } from "./jwt-payload.interface";
import { Player } from "./player.entity";
import { PlayerRepository } from "./player.repository";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(PlayerRepository)
		private userRepository: PlayerRepository,
		private jwtService: JwtService,
	) {}

	async signUp(createUserDto: CreateUserDto): Promise<void> {
		return this.userRepository.signUp(createUserDto);
	}

	async signIn(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
		const username = await this.userRepository.validateUserPassword(createUserDto);
		if (!username) {
			throw new UnauthorizedException('Invalid credentials')
		}
	
		const payload: JwtPayload = { username };
		const accessToken = await this.jwtService.sign(payload);
		return { accessToken };
	}

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