var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { observable, action } from 'mobx';
/*import { configure } from 'mobx';

// 启用严格模式 不允许在action之外修改state
configure({ enforceActions: "strict" });*/
class Home {
    constructor() {
        this.name = '川少';
        this.age = 18;
        this.onAddAge = () => {
            this.age += 1;
        };
    }
}
__decorate([
    observable,
    __metadata("design:type", String)
], Home.prototype, "name", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], Home.prototype, "age", void 0);
__decorate([
    action,
    __metadata("design:type", Object)
], Home.prototype, "onAddAge", void 0);
export default new Home();
//# sourceMappingURL=store.js.map