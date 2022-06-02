import { IsIn, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Player } from "../../players/player.entity";
import { RelationStatus } from "../relation_status.enum";

export class GetRelationFilterDto {

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsNotEmpty()
    user1: number;

    @IsOptional()
    @IsNotEmpty()
    user2: number;

    @IsOptional()
    @IsIn([RelationStatus.NONE, RelationStatus.PENDING, RelationStatus.FRIEND, RelationStatus.BLOCKED])
    status: RelationStatus;
}