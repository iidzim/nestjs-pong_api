import { Repository } from "typeorm";
import { Achievement } from "./achievement.entity";
import { CreateAchievDto } from "./dto-achievement/create-achievement.dto";
import { GetAchievFilterDto } from "./dto-achievement/get-achievement-filter.dto";

export class AchievementRepository extends Repository<Achievement> {

	async getAchievement(FilterDto: GetAchievFilterDto): Promise<Achievement[]> {
		const { name, require, user } = FilterDto;
		const query = this.createQueryBuilder('achievement');
		if (name) {
			query.andWhere('achievement.name = :name', { name })
		}
		if (require) {
			query.andWhere('achievement.require = :require', { require })
		}
		if (user) {
			query.andWhere('achievement.user = :user', { user })
		}
		const achivs = await query.getMany();
		return achivs;
	}

	async createAchievement(createAchievDto: CreateAchievDto): Promise<Achievement> {
		const { require, user } = createAchievDto;
		const achv = new Achievement();
		if (require === 1 || require === 5 || require === 10 || require === 20) {

			achv.require = require;
			if (achv.require === 1) {
				achv.name = "Game Explorer";
				achv.description = "Played your first game";
			}
			if (achv.require === 5) {
				achv.name = "Bronze";
				achv.description = "You Won 5 games";
			}
			if (achv.require === 10) {
				achv.name = "Silver";
				achv.description = "You Won 10 games";
			}
			if (achv.require === 20) {
				achv.name = "Gold";
				achv.description = "You Won 20 games";
			}
		} else {
			achv.require = require;
		}
		achv.user = user;
		return achv;
	}
}