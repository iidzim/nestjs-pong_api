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
require('dotenv').config({ path: `.env` });
const passport = require('passport');
const FortyTwoStrategy = require('passport-42').Strategy;
passport.use(new FortyTwoStrategy({
    clientID: process.env.UID,
    clientSecret: process.env.SECRET,
    callbackURL: process.env.CALLBACK_URL,
}, async function (accessToken, refreshToken, profile, cb) {
    console.log(profile._json);
    const { login } = profile;
    const user = {
        username: login,
        accessToken,
    };
    console.log('user = ' + profile.login);
    cb(null, user);
}));
let AuthService = class AuthService {
    constructor() { }
    login() {
        console.log('login');
        passport.authenticate('42', { successRedirect: `/`, failureRedirect: `/failure` });
    }
    logout() {
        console.log('logout');
        passport.logout();
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map