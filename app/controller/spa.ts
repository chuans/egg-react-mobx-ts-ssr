import {Controller} from 'egg';

export default class extends Controller {
    public async home() {
        const {ctx} = this;
        await ctx.render('index.js' , {url: ctx.url, appVersion: '最高版本号码', name: '我是真的帅得一批'});
    }
}