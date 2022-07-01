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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
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
    const user = {
        id: profile._json.id,
        login: profile._json.login,
        accessToken: accessToken,
        refreshToken: refreshToken,
    };
    cb(null, user);
}));
let AuthService = class AuthService {
    constructor(playerService, jwtService) {
        this.playerService = playerService;
        this.jwtService = jwtService;
    }
    async login(req, res) {
        console.log('login');
        passport.authenticate('42');
        if (!req.user) {
            return 'no user from 42';
        }
        const user = req.user;
        const player = await this.playerService.findOrCreate(user.id, user.login);
        res.cookie('connect.sid', [user.accessToken, user.refreshToken]);
        return res.redirect('/home/');
    }
    callback(req, res) {
        passport.authenticate('42', { successRedirect: `/home`, failureRedirect: `/auth/login` }),
            function (req, res) {
                res.redirect('/home');
            };
    }
    async logout(id, req, res) {
        console.log('logout');
        await this.playerService.updateStatus(id, player_status_enum_1.UserStatus.OFFLINE);
        req.logout();
        return res.redirect('/auth/login');
    }
};
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Response]),
    __metadata("design:returntype", void 0)
], AuthService.prototype, "callback", null);
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [players_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map