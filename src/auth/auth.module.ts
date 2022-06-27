import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from '../players/player.repository';
import { PlayerModule } from '../players/players.module';
import { UsersService } from '../players/players.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { AuthStrategy } from './auth.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'pingpong',
            signOptions: {
                expiresIn: 3600,
            },
        }),
        PlayerModule,
        TypeOrmModule.forFeature([PlayerRepository]),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        UsersService,
        // AuthStrategy,
    ],
})
export class AuthModule {}
