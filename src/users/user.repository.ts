import { User } from "./user.entity";
import { UserStatus } from "./user_status.enum";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto-users/create-user.dto";
import { GetUsersFilterDto } from "./dto-users/get-user-filter.dto";

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

	async createUser(createUserDto: CreateUserDto): Promise<User> {
		const { username, avatar } = createUserDto;
		const user = new User();
		user.username = username;
		user.avatar = avatar;
		user.level = 0;
		user.status = UserStatus.OFFLINE;
		await user.save();
		return user;
	}
}