import { Repository } from "typeorm";
import { Achievement } from "./achievement.entity";
import { AchievementStatus } from "./achievement_status.enum";
import { CreateAchievDto } from "./dto-achievement/create-achievement.dto";
import { GetAchievFilterDto } from "./dto-achievement/get-achievement-filter.dto";

export class AchievementRepository extends Repository<Achievement> {

	async getAchievement(FilterDto: GetAchievFilterDto): Promise<Achievement[]> {
		const { category, require, user } = FilterDto;
		const query = this.createQueryBuilder('achievement');
		if (category) {
			query.andWhere('achievement.category = :category', { category })
		}
		if (require) {
			query.andWhere('achievement.require = :require', { require })
		}
		// if (user) {
		// 	query.andWhere('achievement.user = :user', { user })
		// }
		const achivs = await query.getMany();
		return achivs;
	}

	async createAchievement(createAchievDto: CreateAchievDto): Promise<Achievement> {
		const { require, user } = createAchievDto;
		const achv = new Achievement();
		achv.require = require;
		if (achv.require === 1) {
			achv.category = AchievementStatus.FIRST;
		}
		if (achv.require === 5) {
			achv.category = AchievementStatus.BRONZE;
		}
		if (achv.require === 10) {
			achv.category = AchievementStatus.SILVER;
		}
		if (achv.require === 20) {
			achv.category = AchievementStatus.GOLD;
		}
		achv.user = user;
		return achv;
	}
}