import {Service} from 'egg';

export default class extends Service {
    public async find(user: String) {
        return await this.ctx.db.query('select * from user where id = ?', user);
    }
}
