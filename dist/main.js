"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.enableCors({ origin: ["http://localhost:3000/", "https://api.intra.42.fr/"], credentials: true });
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map

// https://api.intra.42.fr/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A3001%2Fauth%2Flogin&client_id=586c1c8fde913cc2d625042e39cd449c79a3c386dce871f6e55caa110796bc56