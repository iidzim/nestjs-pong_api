import { Injectable } from '@nestjs/common';
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
		// try	{
			const user = {
				id: profile._json.id,
				login: profile._json.login,
				accessToken: accessToken,
				refreshToken: refreshToken,
				
			}
			console.log('user id > ' + user.id);
			console.log('user login > ' + user.login);
			console.log('accessToken > ' + accessToken);
			console.log('refreshToken > ' + refreshToken);
		// 	const player = await this.UsersService.findOrCreate(user.id, user.login);
			cb(null, user);

		// } catch (err) {
		// 	console.log('error = ' + err);
		//  	return cb(null, err);
		// }
		// cb(null, profile);
	}
));

@Injectable()
export class AuthService {
	constructor(
		private readonly playerService: UsersService,
		private jwtService: JwtService,
	) {}

	async login(req) {
		console.log('login');
		passport.authenticate('42', {successRedirect: `/home`,failureRedirect: `/auth/login`});
		//td: find or create
		if (!req.user) {
			return 'no user from 42';
		}
		const user = req.user;
		const player = await this.playerService.findOrCreate(user.id, user.login);
		console.log('********');
		for (const [i, j] of Object.entries(player)) {
			console.log(i, j);
		}
		// const payload: JwtPayload = { id, username };

		// return player;
	}

	logout(id: number): any {
		console.log('logout');
		this.playerService.updateStatus(id, UserStatus.OFFLINE);
		passport.logout();
		//- redirect to home 'https://127.0.0.1:3000/auth/login'
	}
}
