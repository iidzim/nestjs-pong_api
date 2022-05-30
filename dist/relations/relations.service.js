"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const relation_repository_1 = require("./relation.repository");
let RelationsService = class RelationsService {
    constructor(relationRepository) {
        this.relationRepository = relationRepository;
    }
    async createRelation(CreateRelationDto) {
        return this.relationRepository.createrelation(CreateRelationDto);
    }
    async getRelationById(id) {
        const found = await this.relationRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Relation with ID "${id}" not found`);
        }
        return found;
    }
    async getRelation(FilterDto) {
        return this.relationRepository.getRelations(FilterDto);
    }
    async deleteRelation(id) {
        const del = await this.relationRepository.delete(id);
        if (!del.affected) {
            throw new common_1.NotFoundException(`Relation with ID "${id}" not found`);
        }
    }
};
RelationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(relation_repository_1.RelationRepository)),
    __metadata("design:paramtypes", [relation_repository_1.RelationRepository])
], RelationsService);
exports.RelationsService = RelationsService;
//# sourceMappingURL=relations.service.js.map