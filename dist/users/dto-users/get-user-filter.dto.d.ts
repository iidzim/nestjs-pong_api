import { UserStatus } from "../user_status.enum";
export declare class GetUsersFilterDto {
    id: number;
    username: string;
    level: number;
    status: UserStatus;
}
