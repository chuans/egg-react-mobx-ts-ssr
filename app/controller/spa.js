"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class default_1 extends egg_1.Controller {
    async home() {
        const { ctx } = this;
        await ctx.render('index.js', { url: ctx.url, appVersion: '最高版本号码', name: '我是真的帅得一批' });
    }
}
exports.default = default_1;
