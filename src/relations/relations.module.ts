import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationRepository } from './relation.repository';
import { RelationsController } from "./relations.controller";
import { RelationsService } from "./relations.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([RelationRepository]),
    ],
    controllers: [RelationsController],
    providers: [RelationsService],
    exports: [RelationRepository],
})
export class RelationModule {}