"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.get('/api/user/getInfo', app.controller.user.login);
};
