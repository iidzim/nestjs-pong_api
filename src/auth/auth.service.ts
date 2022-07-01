import { Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from "./jwt-payload.interface";
import { Player } from '../players/player.entity';
import { UsersService } from '../players/players.service';
import { UserStatus } from '../players/player_status.enum';
require ('dotenv').config({ path: `.env` });

const passport = require('passport');
const FortyTwoStrategy = require('passport-42').Strategy;

passport.use(new FortyTwoStrategy({

	clientID: process.env.UID,
	clientSecret: process.env.SECRET,
	callbackURL: process.env.CALLBACK_URL,
	},
	async function(accessToken: string, refreshToken: string, profile: any, cb: any) {
		// console.log("function > number of arguments passed: ", arguments.length);
		// console.log(profile);
		const user = {
			id: profile._json.id,
			login: profile._json.login,
			accessToken: accessToken,
			refreshToken: refreshToken,
			
		}
		// console.log('user id > ' + user.id);
		// console.log('user login > ' + user.login);
		// console.log('accessToken > ' + accessToken);
		// console.log('refreshToken > ' + refreshToken);
		cb(null, user);
	}
));

@Injectable()
export class AuthService {
	constructor(
		private readonly playerService: UsersService,
		private jwtService: JwtService,
	) {}

	async login(req, res) {
		console.log('login');
		passport.authenticate('42');
		if (!req.user) {
			return 'no user from 42';
		}
		const user = req.user;
		const player = await this.playerService.findOrCreate(user.id, user.login);
		// for (const [i, j] of Object.entries(player)) {
		// 	console.log(i, j);
		// }
		// req.res.setHeader('Set-Cookie', [user.accessToken, user.refreshToken]);
		res.cookie('connect.sid',[user.accessToken, user.refreshToken]);
		// return player;
		// return this.callback(req, res);
		return res.redirect('/home/');

		// const payload: JwtPayload = {user.id, user.login}
		// const accessToken = await this.jwtService.sign(payload);
		// return { accessToken };
	}

	callback(@Req() req: Request, @Res() res: Response) {
		passport.authenticate('42', {successRedirect: `/home`,failureRedirect: `/auth/login`}),
  		function(req, res) {
    		// Successful authentication, redirect home.
    		res.redirect('/home');
  		}
	}

	async logout(id: number, req, res): Promise<any> {
		console.log('logout');
		await this.playerService.updateStatus(id, UserStatus.OFFLINE);
		// passport.logout();
		req.logout();
		return res.redirect('/auth/login');
	}
}
