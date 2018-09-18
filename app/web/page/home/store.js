/**
 * Created with File
 * Author: Chuans
 * Github: https://github.com/chuans
 * Date: 2018/9/18
 * Time: 下午4:46
 */

import {observable, action} from 'mobx';

/*import { configure } from 'mobx';

// 启用严格模式 不允许在action之外修改state
configure({ enforceActions: "strict" });*/

class Home {
    @observable name = '点击数字增加';
    @observable age = 18;
    
    @action onAddAge = () => {
        this.age += 1;
    }
}

export default new Home();

