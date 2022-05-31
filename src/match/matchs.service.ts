import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PlayerRepository } from "../Players/Player.repository";
import { CreateMatchDto } from "./dto-match/create-match.dto";
import { GetMatchFilterDto } from "./dto-match/get-match-filter.dto";
import { Match } from "./match.entity";
import { MatchRepository } from "./match.repository";

@Injectable()
export class MatchService {
    constructor(
        @InjectRepository(PlayerRepository)
        private matchRepository: MatchRepository,
    ) {}

    async createMatch(createMatchDto: CreateMatchDto): Promise<Match> {
        return this.matchRepository.createMatch(createMatchDto);
    }

    async getMatchById(id: number): Promise<Match> {
		const found = await this.matchRepository.findOne(id);
		if (!found){
			throw new NotFoundException(`Match with ID "${id}" not found`)
		}
		return found;
	}

	async getMatch(FilterDto: GetMatchFilterDto):Promise<Match[]> { 
		return this.matchRepository.getMatch(FilterDto);
	}

    async deleteMatch(id: number): Promise<void> {
		const del = await this.matchRepository.delete(id);
		if (!del.affected){
			throw new NotFoundException(`Match with ID "${id}" not found`)
		}
	}
}
