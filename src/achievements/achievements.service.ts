import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ADDRGETNETWORKPARAMS } from 'dns';
import { Player } from '../players/player.entity';
import { Achievement } from './achievement.entity';
import { AchievementRepository } from './achievement.repository';
import { CreateAchievDto } from './dto-achievement/create-achievement.dto';
import { GetAchievFilterDto } from './dto-achievement/get-achievement-filter.dto';

@Injectable()
export class AchievementsService {
    constructor(
        @InjectRepository(AchievementRepository)
        private achievementRepository: AchievementRepository,
    ) {}

    async createAchievement(createAchievDto: CreateAchievDto): Promise<Achievement> {
        return this.achievementRepository.createAchievement(createAchievDto);
    }

    // async getAchievementByPlayer(player: Player): Promise<Achievement> {
    //     const found = await this.achievementRepository.findOne(user);
    //     if (!found){
	// 		throw new NotFoundException(`Achievement not found`)
    //     }
	// 	return found;
    // }

    async getAchievement(FilterDto: GetAchievFilterDto):Promise<Achievement[]> { 
		return this.achievementRepository.getAchievement(FilterDto);
	}
}
