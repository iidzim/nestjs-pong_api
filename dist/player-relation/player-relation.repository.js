"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player_relationRepository = void 0;
const typeorm_1 = require("typeorm");
const player_relations_entity_1 = require("./player_relations.entity");
class Player_relationRepository extends typeorm_1.Repository {
    async createPR() {
        const pr = new player_relations_entity_1.Player_relation();
        await pr.save();
        return pr;
    }
}
exports.Player_relationRepository = Player_relationRepository;
//# sourceMappingURL=player-relation.repository.js.map