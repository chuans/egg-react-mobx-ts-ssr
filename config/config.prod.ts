/**
 * 生产环境配置
 *
 * 最终生效的配置为 prod + default（前者覆盖后者）
 */


import * as path from 'path';
import * as fs from 'fs';

export default function (app) {
  const exports: any = {};

    exports.mysql = {
        client: {
            host: '115.28.176.152',
            port: '3306',
            user: 'root',
            password: 'c6s35vzjqDzJIZYy',
            database: 'chasing_the_wind'
        },
        // 挂在到App上
        app:true
    };

  return exports;
}
