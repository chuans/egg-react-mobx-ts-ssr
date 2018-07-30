"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./routers/user");
exports.default = (app) => {
    user_1.default(app);
    app.get('*', app.controller.spa.home);
};
