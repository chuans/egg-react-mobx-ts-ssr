"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class default_1 extends egg_1.Controller {
    async login() {
        const { ctx } = this;
        const result = await ctx.service.user.find('asdfasd');
        console.log(result);
    }
}
exports.default = default_1;
