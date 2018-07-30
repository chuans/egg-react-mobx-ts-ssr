import {Application} from 'egg';
import users from './routers/user';


export default (app: Application) => {
    users(app);

    app.get('*', app.controller.spa.home);
};
