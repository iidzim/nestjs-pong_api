import { Module } from '@nestjs/common';
import { UsersController } from "./players.controller";
import { UsersService } from "./players.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './player.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'pingpong1337',
            signOptions: {
                expiresIn: 3600,
            },
        }),
        TypeOrmModule.forFeature([PlayerRepository]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}