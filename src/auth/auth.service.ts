import { Injectable } from '@nestjs/common';
import { PlayerRepository } from '../players/player.repository';
import { UsersService } from '../players/players.service';
// import { AuthStrategy } from './auth.strategy';
require ('dotenv').config({ path: `.env` });

const db = require('../players/player.entity');
const passport = require('passport');
const FortyTwoStrategy = require('passport-42').Strategy;

passport.use(new FortyTwoStrategy({

	clientID: process.env.UID,
	clientSecret: process.env.SECRET,
	callbackURL: process.env.CALLBACK_URL,
	},
	async function(accessToken: string, refreshToken: string, profile: any, cb: any) {
		// const usersService = new UsersService();
		console.log("function > number of arguments passed: ", arguments.length);
		const { id, login } = profile;
		// try	{
			const user = {
				id: profile._json.id,
				login: profile._json.login,
				accessToken: accessToken,
			}
			console.log('user id > ' + user.id);
			console.log('user login > ' + user.login);
			console.log('accessToken > ' + accessToken);
			// const player = await db.Player.find({
				// where: { id: profile.id },
			// });
			// console.log({UsersService});
			const player = this.UsersService.findOrCreate(user.id, user.login);
			// const player = db.Player.findOrCreate(user.id, user.login);
			console.log('player > ' + player);
			cb(null, user);

		// } catch (err) {
		// 	console.log('error = ' + err);
		// 	return cb(null, err);
		// }
	}
));

@Injectable()
export class AuthService {
	constructor(
		private readonly playerService: UsersService,
		// private authStrategy: AuthStrategy,
	) {}

	login(): any {
		console.log('login');
		// passport.authenticate('42');
		passport.authenticate('42', {successRedirect: `/`,failureRedirect: `/failure`});
		// this.authStrategy.passport.authenticate('42', {successRedirect: `/`,failureRedirect: `/failure`});
	}

	callback(): any {
		console.log('callback');
		// passport.authenticate('42', {successRedirect: `/`,failureRedirect: `/failure`});
		passport.authenticate('42', { failureRedirect: '/failure' });
		// this.authStrategy.passport.authenticate('42', { failureRedirect: '/failure' }),
		// function(req, res) {
		// 	console.log('HERE2');
		// 	console.log(req.user);
		// 	res.redirect('/');
		// }
	}

	logout(): any {
		console.log('logout');
		// this.authStrategy.passport.logout();
		passport.logout();
		// redirect to home 'https://127.0.0.1:3000/'
	}
}
