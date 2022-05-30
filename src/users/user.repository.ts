import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/croodles';
import { User } from "./user.entity";
import { UserStatus } from "./user_status.enum";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto-users/create-user.dto";
import { GetUsersFilterDto } from "./dto-users/get-user-filter.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

	async getUsers(FilterDto: GetUsersFilterDto): Promise<User[]> {
		const { id, username, level, status } = FilterDto;
		const query = this.createQueryBuilder('user');
		if (id) {
			query.andWhere('user.id = :id', { id }) // or {status : 'ONLINE' } for a static result
		}
		if (username) {
			query.andWhere('user.username = :username', { username })
		}
		if (level) {
			query.andWhere('user.level == :level', { level })
		}
		if (status) {
			query.andWhere('user.status = :status', { status })
		}
		const users = await query.getMany();
		return users;
	}

	async signUp(createUserDto: CreateUserDto): Promise<void> {
		const { username, avatar, password } = createUserDto;
		const user = new User();
		user.username = username;
		if (avatar) {
			user.avatar = avatar;
		}
		else {
			let svg = createAvatar(style, {seed: username + 'svg'});
			user.avatar = svg;
		}
		user.password = password;
		user.level = 0;
		user.status = UserStatus.OFFLINE;
		try {
			await user.save();
		} catch (error) {
			console.log(error.code);
			if (error.code === '23505') {
				throw new ConflictException('Username already exists');
			} else {
				throw new InternalServerErrorException();
			}
		}
	}
}