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
    logging: true,
    autoLoadEntities : true,
}

// synchronize - Indicates if database schema should be auto created on every application launch.
// Be careful with this option and don't use this in production - otherwise you can lose production data.
// This option is useful during debug and development.
// As an alternative to it, you can use CLI and run schema:sync command.
// Note that for MongoDB database it does not create schema, because MongoDB is schemaless.
// Instead, it syncs just by creating indices.