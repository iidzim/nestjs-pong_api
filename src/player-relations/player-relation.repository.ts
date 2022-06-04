import { Repository } from "typeorm";
import { GetPRFilterDto } from "./dto-pr/get-pr-filter.dto";
import { Player_relation } from "./player_relations.entity";

export class Player_relationRepository extends Repository<Player_relation> {

    // async getPr(FilterDto: GetPRFilterDto): Promise<Player_relation[]> {
    //     const { id, user, relation } = FilterDto;
    //     const query = this.createQueryBuilder('pr');
    // }

    async createPR(): Promise<Player_relation>{
        const pr = new Player_relation();
        // pr.user = ;
        // pr.relation = ;
        await pr.save();
        return pr;
    }
}