"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    insertUser(id, username, avatar) {
        this.duplicateUser(id, username);
        const newUser = new users_model_1.User(id, username, avatar, 0, 0, 0, 'online');
        this.users.push(newUser);
    }
    getAllUsers() {
        return [...this.users];
    }
    getUser(id) {
        const player = this.findUser(id);
        return Object.assign({}, player);
    }
    updateUsername(id, username) {
        const [userObj, userIndex] = this.findUser(id);
        const updateUsernm = Object.assign({}, userObj);
        if (username) {
            updateUsernm.id = id;
        }
        this.users[userIndex] = updateUsernm;
    }
    updateLevel(id, lvl) {
        const [userObj, userIndex] = this.findUser(id);
        const updateUser = Object.assign({}, userObj);
        if (lvl > updateUser.level) {
            updateUser.level = lvl;
        }
        this.users[userIndex] = updateUser;
    }
    updateStatus(id, status) {
        const [userObj, userIndex] = this.findUser(id);
        const updateUser = Object.assign({}, userObj);
        updateUser.status = status;
        this.users[userIndex] = updateUser;
    }
    findUser(id) {
        const userIndex = this.users.findIndex(player => player.id === id);
        const userObj = this.users[userIndex];
        if (!userObj) {
            throw new common_1.NotFoundException('Could not find user');
        }
        return [userObj, userIndex];
    }
    duplicateUser(id, username) {
        const usernm = this.users.find(player => player.username === username);
        if (usernm) {
            throw new common_1.NotFoundException('username already taken !');
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map