import { MatchService } from "./match.service";
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    getAllMatchs(): import("./match.model").Match[];
}
