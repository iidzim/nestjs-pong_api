import { Repository } from "typeorm";
import { Achievement } from "./achievement.entity";
import { CreateAchievDto } from "./dto-achievement/create-achievement.dto";
import { GetAchievFilterDto } from "./dto-achievement/get-achievement-filter.dto";
export declare class AchievementRepository extends Repository<Achievement> {
    getAchievement(FilterDto: GetAchievFilterDto): Promise<Achievement[]>;
    createAchievement(createAchievDto: CreateAchievDto): Promise<Achievement>;
}
