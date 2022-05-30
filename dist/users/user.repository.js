"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_entity_1 = require("./user.entity");
const user_status_enum_1 = require("./user_status.enum");
const typeorm_1 = require("typeorm");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async getUsers(FilterDto) {
        const { id, username, level, status } = FilterDto;
        const query = this.createQueryBuilder('user');
        if (id) {
            query.andWhere('user.id = :id', { id });
        }
        if (username) {
            query.andWhere('user.username = :username', { username });
        }
        if (level) {
            query.andWhere('user.level == :level', { level });
        }
        if (status) {
            query.andWhere('user.status = :status', { status });
        }
        const users = await query.getMany();
        return users;
    }
    async signUp(createUserDto) {
        const { username, avatar, password } = createUserDto;
        const user = new user_entity_1.User();
        user.username = username;
        if (avatar) {
            user.avatar = avatar;
        }
        user.password = password;
        user.level = 0;
        user.status = user_status_enum_1.UserStatus.OFFLINE;
        await user.save();
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map