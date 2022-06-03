import { IsIn, IsNotEmpty } from "class-validator";
import { RelationStatus } from "../relation_status.enum";

export class CreateRelationDto {

    @IsNotEmpty()
    @IsIn([RelationStatus.NONE, RelationStatus.PENDING, RelationStatus.FRIEND, RelationStatus.BLOCKED])
    status: RelationStatus;

}