// import { Injectable } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import { UsersService } from '../players/players.service';
// require ('dotenv').config({ path: `.env` });

// const passport = require('passport');
// const FortyTwoStrategy = require('passport-42').Strategy;


// @Injectable()
// export class AuthStrategy extends PassportStrategy(FortyTwoStrategy) {
// 	constructor(private usersService: UsersService) {
// 		super({
// 			passport.use(new FortyTwoStrategy({

// 				clientID: process.env.UID,
// 				clientSecret: process.env.SECRET,
// 				callbackURL: process.env.CALLBACK_URL,
				
// 				},
// 				async function(accessToken: string, refreshToken: string, profile: any, cb: any) {
			
// 					// const { id, login } = profile;
// 					// try	{
// 						const user = {
// 							id: profile._json.id,
// 							login: profile._json.login,
// 							accessToken: accessToken,
// 						}
// 						console.log('user id > ' + user.id);
// 						console.log('user login > ' + user.login);
// 						console.log('accessToken > ' + accessToken);
// 						// const player = await db.Player.find({
// 							// where: { id: profile.id },
// 							// where: { username: profile._json.login },
// 						// });
// 						console.log({UsersService});
// 						const player = this.UsersService.findOrCreate(user.id, user.login);
// 						console.log('player > ' + player?.id);
// 						cb(null, user);

// 					// } catch (err) {
// 					// 	console.log('error = ' + err);
// 					// 	return cb(null, err);
// 					// }
// 				}
// 			));
// 		});
// 	}

// 	async validate(accessToken: string, refreshToken: string, profile: any, cb: any) {
// 		// const user = await passport.function(accessToken, refreshToken, profile, cb)
// 		// return user;
// 	}

// }