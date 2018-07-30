"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class default_1 extends egg_1.Service {
    async find(user) {
        return await this.ctx.db.query('select * from user where id = ?', user);
    }
}
exports.default = default_1;
