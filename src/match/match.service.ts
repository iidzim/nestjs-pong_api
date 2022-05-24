import { Injectable } from "@nestjs/common";
import { Match, MatchStatus } from "./match.model";

@Injectable()
export class MatchService {
    private matchs: Match[] = [];

    getAllMatchs(){
        return [...this.matchs];
    }
}
