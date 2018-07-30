import * as path from 'path';
import * as fs from 'fs';
import {EggAppConfig} from 'egg';

export default function (app: EggAppConfig) {
    const exports: any = {};

    exports.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
    };

    exports.logger = {
        consoleLevel: 'DEBUG',
        dir: path.join(app.baseDir, 'logs')
    };

    exports.static = {
        prefix: '/public/',
        dir: path.join(app.baseDir, 'public')
    };

    exports.keys = 'chasing_the_wind';

    exports.middleware = [
        // 'access'
    ];

    exports.mysql = {
        client: {
            host: '115.28.176.152',
            port: '3307',
            user: 'root',
            password: '123456',
            database: 'chasing_the_wind'
        },
        // 挂在到App上
        app:true
    };

    return exports;
}
