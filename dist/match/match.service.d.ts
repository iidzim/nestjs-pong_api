import { Match } from "./match.model";
export declare class MatchService {
    private matchs;
    getAllMatchs(): Match[];
}
import { BaseEntity } from 'typeorm';
export default class BookEntity extends BaseEntity {
    id: number;
    name: string;
}
