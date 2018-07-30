import SPAController from './controller/spa';
import UserController from './controller/user';

declare module 'egg' {
    export interface IController {
        spa: SPAController,
        user: UserController
    }

    function startCluster(options: any);
}