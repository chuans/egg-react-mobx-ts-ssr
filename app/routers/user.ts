import {Application} from 'egg';

export default (app:Application)=>{
    app.get('/api/user/getInfo',app.controller.user.login)
}