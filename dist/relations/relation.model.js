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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relation = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let Relation = class Relation extends typeorm_1.BaseEntity {
    constructor(id, status) {
        super();
        this.id = id;
        this.status = status;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Relation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", user_entity_1.User)
], Relation.prototype, "user1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", user_entity_1.User)
], Relation.prototype, "user2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof RelationStatus !== "undefined" && RelationStatus) === "function" ? _a : Object)
], Relation.prototype, "status", void 0);
Relation = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof RelationStatus !== "undefined" && RelationStatus) === "function" ? _b : Object])
], Relation);
exports.Relation = Relation;
//# sourceMappingURL=relation.model.js.map