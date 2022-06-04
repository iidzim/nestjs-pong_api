"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementRepository = void 0;
const typeorm_1 = require("typeorm");
const achievement_entity_1 = require("./achievement.entity");
class AchievementRepository extends typeorm_1.Repository {
    async getAchievement(FilterDto) {
        const { name, require, user } = FilterDto;
        const query = this.createQueryBuilder('achievement');
        if (name) {
            query.andWhere('achievement.name = :name', { name });
        }
        if (require) {
            query.andWhere('achievement.require = :require', { require });
        }
        if (user) {
            query.andWhere('achievement.user = :user', { user });
        }
        const achivs = await query.getMany();
        return achivs;
    }
    async createAchievement(createAchievDto) {
        const { require, user } = createAchievDto;
        const achv = new achievement_entity_1.Achievement();
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
        }
        else {
            achv.require = require;
        }
        achv.user = user;
        return achv;
    }
}
exports.AchievementRepository = AchievementRepository;
//# sourceMappingURL=achievement.repository.js.map