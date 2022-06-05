"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementRepository = void 0;
const typeorm_1 = require("typeorm");
const achievement_entity_1 = require("./achievement.entity");
const achievement_status_enum_1 = require("./achievement_status.enum");
class AchievementRepository extends typeorm_1.Repository {
    async getAchievement(FilterDto) {
        const { category, require, user } = FilterDto;
        const query = this.createQueryBuilder('achievement');
        if (category) {
            query.andWhere('achievement.category = :category', { category });
        }
        if (require) {
            query.andWhere('achievement.require = :require', { require });
        }
        const achivs = await query.getMany();
        return achivs;
    }
    async createAchievement(createAchievDto) {
        const { require, user } = createAchievDto;
        const achv = new achievement_entity_1.Achievement();
        achv.require = require;
        if (achv.require === 1) {
            achv.category = achievement_status_enum_1.AchievementStatus.FIRST;
        }
        if (achv.require === 5) {
            achv.category = achievement_status_enum_1.AchievementStatus.BRONZE;
        }
        if (achv.require === 10) {
            achv.category = achievement_status_enum_1.AchievementStatus.SILVER;
        }
        if (achv.require === 20) {
            achv.category = achievement_status_enum_1.AchievementStatus.GOLD;
        }
        achv.user = user;
        return achv;
    }
}
exports.AchievementRepository = AchievementRepository;
//# sourceMappingURL=achievement.repository.js.map