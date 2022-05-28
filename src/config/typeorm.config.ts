import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'ping',
    password: 'pong',
    database: 'pong_db',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
    autoLoadEntities : true,
}
