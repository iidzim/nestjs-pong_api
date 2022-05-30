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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("./user.repository");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(createUserDto) {
        return this.userRepository.signUp(createUserDto);
    }
    async getUserById(id) {
        const found = await this.userRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`User with ID "${id}" not found`);
        }
        return found;
    }
    async getUsers(FilterDto) {
        return this.userRepository.getUsers(FilterDto);
    }
    async updateUsername(id, username) {
        const updated = await this.getUserById(id);
        updated.username = username;
        await updated.save();
        return updated;
    }
    async updateAvatar(id, avatar) {
        const updated = await this.getUserById(id);
        updated.avatar = avatar;
        await updated.save();
        return updated;
    }
    async deleteUser(id) {
        const del = await this.userRepository.delete(id);
        if (!del.affected) {
            throw new common_1.NotFoundException(`User with ID "${id}" not found`);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map