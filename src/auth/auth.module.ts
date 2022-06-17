import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { JwtStrategy } from '../players/jwt.strategy';
import { PlayerRepository } from '../players/player.repository';
import { PlayerModule } from '../players/players.module';
import { UsersService } from '../players/players.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
        PlayerModule,
        TypeOrmModule.forFeature([PlayerRepository]),
        // PlayerRepository,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        UsersService,
        // PassportModule,
        JwtService,
    ],
})
export class AuthModule {}
