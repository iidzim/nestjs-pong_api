import { Achievement } from './achievement.entity';
import { AchievementRepository } from './achievement.repository';
import { CreateAchievDto } from './dto-achievement/create-achievement.dto';
import { GetAchievFilterDto } from './dto-achievement/get-achievement-filter.dto';
export declare class AchievementsService {
    private achievementRepository;
    constructor(achievementRepository: AchievementRepository);
    createAchievement(createAchievDto: CreateAchievDto): Promise<Achievement>;
    getAchievementByPlayer(id: number): Promise<void>;
    getAchievement(FilterDto: GetAchievFilterDto): Promise<Achievement[]>;
}
