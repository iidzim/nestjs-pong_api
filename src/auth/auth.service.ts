import { Injectable } from '@nestjs/common';
require ('dotenv').config({ path: `.env` });


// var GET_ACCESS_TOKEN_URL = "https://api.intra.42.fr/oauth/token"
// var TEST_ACCESS_TOKEN = "https://api.intra.42.fr/oauth/token/info" 
// var GET_USER_DATA_URL = "https://api.intra.42.fr/v2/me"


const passport = require('passport')
const FortyTwoStrategy = require('passport-42').Strategy;
passport.use(new FortyTwoStrategy({

	clientID: process.env.UID,
	clientSecret: process.env.SECRET,
	callbackURL: process.env.CALLBACK_URL,
},
async function(accessToken, refreshToken, profile, cb) {
	console.log(profile._json);
	const { login } = profile;
	const user = {
	    username: login,
	    accessToken,
	}
	// const Student = await player.findOrCreate({
	//     where : {id : profile.id},
	//     defaults : {
	//         id : profile._json.id,
	//         login : profile._json.login,
	//       }
	// })
	console.log('user = ' + profile.login);
	cb(null, user);
	// User.findOrCreate({ fortytwoId: profile.id }, function (err, user) {
	// 	return cb(err, user);
	//   });
}
));

@Injectable()
export class AuthService {
	constructor() {}

	login(): any {
		console.log('login');
		passport.authenticate('42', {successRedirect: `/`,failureRedirect: `/failure`})
	}

	logout(): any {
		console.log('logout');
		passport.logout();
		//redirect to home 'https://127.0.0.1:3000/'
	}
}

