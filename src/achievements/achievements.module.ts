import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AchievementRepository } from './achievement.repository';
import { AchievementsController } from './achievements.controller';
import { AchievementsService } from './achievements.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([AchievementRepository]),
    ],
    controllers: [AchievementsController],
    providers: [AchievementsService],
})
export class AchievementsModule {}
