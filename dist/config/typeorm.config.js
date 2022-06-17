"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'ping',
    password: 'pong',
    database: 'pong_db',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
    logging: true,
    autoLoadEntities: true,
};
//# sourceMappingURL=typeorm.config.js.map