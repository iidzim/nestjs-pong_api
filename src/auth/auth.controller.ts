import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService){}

	@Get('login')
	@UseGuards(AuthGuard('42'))
	login(): Promise<any> {
	    return this.authService.login();
	}

	@Get('logout')
	@UseGuards(AuthGuard('42'))
	logout(): any{
	    return this.authService.logout();
	}
}
