"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
egg_1.startCluster({
    baseDir: __dirname,
    workers: process.env.WORKERS,
    port: process.env.PORT
});
