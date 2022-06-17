// import { Injectable } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import { Strategy, VerifyCallback } from 'passport-42';

// console.log('UID > ' + process.env.UID);
// console.log('SECRET > ' + process.env.SECRET);
// console.log('CALLBACKURL > ' + process.env.CALLBACK_URL);

// @Injectable()
// export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {

// 	constructor() {
// 		super({
// 		clientID: process.env.UID,
// 		clientSecret: process.env.SECRET,
// 		callbackURL: process.env.CALLBACK_URL,
// 	});
// }
// 	async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
// 		const { login } = profile;
// 		const user = {
// 			username: profile.login,
// 			accessToken
// 		};
// 		done(null, user);
// 	}
// }