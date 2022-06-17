import { Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { Player } from '../players/player.entity';
import { UsersService } from '../players/players.service';
require ('dotenv').config({ path: `.env` });


// var GET_ACCESS_TOKEN_URL = "https://api.intra.42.fr/oauth/token"
// var TEST_ACCESS_TOKEN = "https://api.intra.42.fr/oauth/token/info" 
// var GET_USER_DATA_URL = "https://api.intra.42.fr/v2/me"

const { db } = require('../players/player.entity');
const passport = require('passport');
const FortyTwoStrategy = require('passport-42').Strategy;
passport.use(new FortyTwoStrategy({

	clientID: process.env.UID,
	clientSecret: process.env.SECRET,
	callbackURL: process.env.CALLBACK_URL,
	},
	async function(accessToken: string, refreshToken: string, profile: any, cb: any) {

		// const { id, login } = profile;
		const user = {
			id: profile._json.id,
			login: profile._json.login,
			accessToken: accessToken,
		}
		console.log('user > ' + user.login);
		console.log('accessToken > ' + accessToken);
		// const player = await this.UsersService.findOrCreate({
		const player = await db.Player.findOrCreate({
			where: { id: profile.id },
			defaults: {
				id: profile._json.id,
				username: profile._json.login
			}
		});
		cb(null, user);
	}
));

@Injectable()
export class AuthService {
	constructor(
		private readonly playerService: UsersService,
	) {}

	login(): any {
		console.log('login');
		// passport.authenticate('42');
		passport.authenticate('42', {successRedirect: `/`,failureRedirect: `/failure`})
	}

	callback(): any {
		console.log('callback');
		passport.authenticate('42', {successRedirect: `/`,failureRedirect: `/failure`});
		// passport.authenticate('42', { failureRedirect: '/failure' }),
		// function(req, res) {
		// 	console.log('HERE2');
		// 	console.log(req.user);
		// 	res.redirect('/');
		// }
	}

	logout(): any {
		console.log('logout');
		passport.logout();
		//redirect to home 'https://127.0.0.1:3000/'
	}
}
