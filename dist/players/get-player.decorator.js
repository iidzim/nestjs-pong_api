"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlayer = void 0;
const common_1 = require("@nestjs/common");
exports.GetPlayer = (0, common_1.createParamDecorator)((data, req) => {
    console.log(req);
    return req.user;
});
//# sourceMappingURL=get-player.decorator.js.map