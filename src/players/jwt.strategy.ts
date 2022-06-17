// import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import { InjectRepository } from "@nestjs/typeorm";
// import { Strategy, ExtractJwt } from 'passport-jwt';
// import { JwtPayload } from "./jwt-payload.interface";
// import { Player } from "./player.entity";
// import { PlayerRepository } from "./player.repository";

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
// 	constructor(
// 		@InjectRepository(PlayerRepository)
// 		private playerRepository: PlayerRepository,
// 	) {
// 		super({
// 			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// 			secretOrKey: 'pingpong',
// 		});
// 	}

// 	async validate(payload: JwtPayload): Promise<Player> {
// 		const { username } = payload;
// 		const user = await this.playerRepository.findOne({ username });
// 		if (!user) {
// 			throw new UnauthorizedException();
// 		}
// 		return user;
// 	}
// }

/*
const passport = require('passport')
const FortyTwoStrategy = require('passport-42').Strategy;
const { db } = require('./database')


passport.use(new FortyTwoStrategy({
    clientID: process.env.FORTYTWO_APP_ID,
    clientSecret: process.env.FORTYTWO_APP_SECRET,
    callbackURL: `${process.env.API}/auth/intra/callback`,
  },
    async function(accessToken, refreshToken, profile, done) {
        try {

            const user = {
                id : profile._json.id,
                accessToken : accessToken,
                role : profile._json['staff?'] ? 'staff' : 'student',
            }

            const Student = await db.Student.findOrCreate({
                where : {id : profile.id},
                defaults : {
                    id : profile._json.id,
                    firstName : profile._json.first_name,
                    lastName : profile._json.last_name,
                    login : profile._json.login,
                    image_url : profile._json.image_url,
                    email : profile._json.email,
                    staff : profile._json['staff?']
                  }
            })

            done(null, user)

        } catch (err)
        {
            console.log(err)
            return done(null, false)
        }
    }
));


passport.serializeUser(function(user, done) {
    done(null, user);
})

passport.deserializeUser(async function(user, done) {
   done(null, user)
})


exports.intra = {
    intraAuth : 
        passport.authenticate('42'),


    intraCallback :
        passport.authenticate('42', {
            successRedirect: `${process.env.API}/profile`,
            failureRedirect: `${process.env.API}/`
        })
}
*/