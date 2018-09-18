import {Controller} from 'egg';

export default class extends Controller {
    public async home() {
        const {ctx} = this;
        await ctx.render('index.js' , {url: ctx.url, appVersion: '版本号码', name: '测试数据'});
    }
}
