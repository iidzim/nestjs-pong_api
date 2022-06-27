import { Module } from '@nestjs/common';
import { UsersController } from "./players.controller";
import { UsersService } from "./players.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './player.repository';
import { RelationsService } from '../relations/relations.service';
import { RelationModule } from '../relations/relations.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'pingpong',
            signOptions: {
                expiresIn: 3600,
            },
        }),
        TypeOrmModule.forFeature([PlayerRepository]),
        RelationModule,
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
    ],
    exports: [UsersService],
})
export class PlayerModule {}