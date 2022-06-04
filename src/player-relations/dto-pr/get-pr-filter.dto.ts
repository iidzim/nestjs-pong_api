import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Relation } from "../../relations/relation.entity";
import { Player } from "../../players/player.entity";

export class GetPRFilterDto {

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsNotEmpty()
    user: Player;

    @IsOptional()
    @IsNotEmpty()
    relation: Relation;
}