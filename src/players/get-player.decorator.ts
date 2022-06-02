import { createParamDecorator } from "@nestjs/common";
import { Player } from "./player.entity";

export const GetPlayer = createParamDecorator((data, req): Player => {
	console.log(req);
    return req.user;
});