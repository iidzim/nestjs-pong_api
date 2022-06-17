import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService){}

	@Get('callback')
	@UseGuards(AuthGuard('42'))
	login(): Promise<any> {
	    return this.authService.callback();
	}

	@Get('logout')
	@UseGuards(AuthGuard('42'))
	logout(): any{
	    return this.authService.logout();
	}

	// @Get('')
	// // @Get('auth/callback')
	// @UseGuards(AuthGuard('42'))
	// async login(): Promise<any> {
	// 	console.log('HERE');
	//     return this.authService.login();
	// }
	// @Get('auth/callback')
	// @UseGuards(AuthGuard('42'))
	// Auth42Redirect(): any {
	//     return this.authService.callback();
	// }
}
