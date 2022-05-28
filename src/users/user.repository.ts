import { User } from "./user.entity";
import { UserStatus } from "./user_status.enum";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUsersFilterDto } from "./dto/get-user-filter.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async getUsers(FilterDto: GetUsersFilterDto): Promise<User[]> {
        const { username, avatar } = FilterDto;
        const query = this.createQueryBuilder('user');
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