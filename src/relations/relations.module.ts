import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationsController } from "./relations.controller";
import { RelationRepository } from './relation.repository';
import { RelationsService } from "./relations.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([RelationRepository]),
    ],
    controllers: [RelationsController],
    providers: [RelationsService],
})
export class RelationModule {}