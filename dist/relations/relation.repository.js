"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationRepository = void 0;
const typeorm_1 = require("typeorm");
const relation_entity_1 = require("./relation.entity");
const relation_status_enum_1 = require("./relation_status.enum");
class RelationRepository extends typeorm_1.Repository {
    async getRelations(FilterDto) {
        const { id, user1, user2, status } = FilterDto;
        const query = this.createQueryBuilder('relation');
        if (id) {
            query.andWhere('relation.id = :id', { id });
        }
        if (user1) {
            query.andWhere('relation.user1 = :user1', { user1 });
        }
        if (user2) {
            query.andWhere('relation.user2 = :user2', { user2 });
        }
        if (status) {
            query.andWhere('relation.status = :status', { status });
        }
        const relations = await query.getMany();
        return relations;
    }
    async createrelation(createMacthDto) {
        const { user1, user2 } = createMacthDto;
        const relation = new relation_entity_1.Relation();
        relation.user1 = user1;
        relation.user2 = user2;
        relation.status = relation_status_enum_1.RelationStatus.NONE;
        await relation.save();
        return relation;
    }
}
exports.RelationRepository = RelationRepository;
//# sourceMappingURL=relation.repository.js.map