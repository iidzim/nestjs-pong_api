"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationRepository = void 0;
const typeorm_1 = require("typeorm");
const relation_entity_1 = require("./relation.entity");
const relation_status_enum_1 = require("./relation_status.enum");
let RelationRepository = class RelationRepository extends typeorm_1.Repository {
    async getRelations(FilterDto) {
        const { id, status } = FilterDto;
        const query = this.createQueryBuilder('relation');
        if (id) {
            query.andWhere('relation.id = :id', { id });
        }
        if (status) {
            query.andWhere('relation.status = :status', { status });
        }
        const relations = await query.getMany();
        return relations;
    }
    async createRelation(createMacthDto) {
        const relation = new relation_entity_1.Relation();
        relation.status = relation_status_enum_1.RelationStatus.NONE;
        await relation.save();
        return relation;
    }
};
RelationRepository = __decorate([
    (0, typeorm_1.EntityRepository)(relation_entity_1.Relation)
], RelationRepository);
exports.RelationRepository = RelationRepository;
//# sourceMappingURL=relation.repository.js.map