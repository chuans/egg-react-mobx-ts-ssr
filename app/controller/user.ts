import {Controller} from 'egg'

export default class extends Controller {
    public async login() {
        const {ctx} = this;

        const result = await ctx.service.user.find('asdfasd');

        console.log(result);
    }
}