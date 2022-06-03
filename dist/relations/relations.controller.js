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
exports.RelationsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_relation_dto_1 = require("./dto-relation/create-relation.dto");
const get_relation_filter_dto_1 = require("./dto-relation/get-relation-filter.dto");
const relations_service_1 = require("./relations.service");
let RelationsController = class RelationsController {
    constructor(relationService) {
        this.relationService = relationService;
    }
    getRelations(FilterDto) {
        return this.relationService.getRelation(FilterDto);
    }
    getRelationById(id) {
        return this.relationService.getRelationById(id);
    }
    addRelation(createRelationDto) {
        return this.relationService.createRelation(createRelationDto);
    }
    deleteRelation(id) {
        return this.relationService.deleteRelation(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_relation_filter_dto_1.GetRelationFilterDto]),
    __metadata("design:returntype", void 0)
], RelationsController.prototype, "getRelations", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RelationsController.prototype, "getRelationById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_relation_dto_1.CreateRelationDto]),
    __metadata("design:returntype", Promise)
], RelationsController.prototype, "addRelation", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RelationsController.prototype, "deleteRelation", null);
RelationsController = __decorate([
    (0, common_1.Controller)('link'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [relations_service_1.RelationsService])
], RelationsController);
exports.RelationsController = RelationsController;
//# sourceMappingURL=relations.controller.js.map