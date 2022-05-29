import { Module } from '@nestjs/common';
import { RelationsController } from "./relations.controller";
import { RelationsService } from "./relations.service";

@Module({
    imports: [],
    controllers: [RelationsController],
    providers: [RelationsService],
})
export class RelationModule {}