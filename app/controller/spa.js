"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class default_1 extends egg_1.Controller {
    async home() {
        const { ctx } = this;
        await ctx.render('index.js', { url: ctx.url, appVersion: '版本号码', name: '测试数据' });
    }
}
exports.default = default_1;
