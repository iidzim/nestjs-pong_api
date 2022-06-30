import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthGuard } from '@nestjs/passport';
import { GetPlayer } from '../players/get-player.decorator';
import { Player } from '../players/player.entity';

@Controller('/auth')
export class AuthController {
	constructor(private readonly authService: AuthService){}

	// @Get('/login')
	// @UseGuards(AuthGuard('42'))
	// login(): Promise<any> {
	//     return this.authService.login();
	// }

	@Get('/logout')
	@UseGuards(AuthGuard('42'))
	logout(
		@GetPlayer() player: Player,
	): any{
	    return this.authService.logout(player.id);
	}

	@Get('login')
	@UseGuards(AuthGuard('42'))
	async FortyTwoAuth(@Req() req) {
		return this.authService.login(req);
	}

	// @Get('redirect')
	// @UseGuards(AuthGuard('42'))
	// async FortyTwoAuthRedirect(@Req() req: Request, @Res() res: Response) {
	// 	// return this.authService.login(req);
	// }
}
