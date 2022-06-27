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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const players_service_1 = require("../players/players.service");
const player_status_enum_1 = require("../players/player_status.enum");
require('dotenv').config({ path: `.env` });
const passport = require('passport');
const FortyTwoStrategy = require('passport-42').Strategy;
passport.use(new FortyTwoStrategy({
    clientID: process.env.UID,
    clientSecret: process.env.SECRET,
    callbackURL: process.env.CALLBACK_URL,
}, async function (accessToken, refreshToken, profile, cb) {
    console.log("function > number of arguments passed: ", arguments.length);
    console.log(profile);
    try {
        const user = {
            id: profile._json.id,
            login: profile._json.login,
            accessToken: accessToken,
        };
        console.log('user id > ' + user.id);
        console.log('user login > ' + user.login);
        console.log('accessToken > ' + accessToken);
        const player = await this.UsersService.findOrCreate(user.id, user.login);
        console.log('player > ' + player);
        cb(null, user);
    }
    catch (err) {
        console.log('error = ' + err);
        return cb(null, err);
    }
}));
let AuthService = class AuthService {
    constructor(playerService) {
        this.playerService = playerService;
    }
    login() {
        console.log('login');
        passport.authenticate('42', { successRedirect: `/home`, failureRedirect: `/auth/login` });
    }
    logout(id) {
        console.log('logout');
        this.playerService.updateStatus(id, player_status_enum_1.UserStatus.OFFLINE);
        passport.logout();
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [players_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map