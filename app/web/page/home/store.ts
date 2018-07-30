import {observable, action} from 'mobx';

/*import { configure } from 'mobx';

// 启用严格模式 不允许在action之外修改state
configure({ enforceActions: "strict" });*/

class Home {
    @observable public name: string = '川少';
    @observable public age: number = 18;

    @action public onAddAge = () => {
        this.age += 1;
    }
}

export default new Home();