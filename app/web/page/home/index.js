var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import HomeStore from './store';
import './style.less';
let default_1 = class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log(this)
        return (React.createElement("div", null,
            React.createElement("h1", null, "\u6211\u662F\u662F\u9996\u9875\u554A"),
            React.createElement("h1", { style: { color: 'red' } }, HomeStore.name),
            React.createElement("h1", { style: { color: 'blue' } }, HomeStore.age),
            React.createElement("h2", null, JSON.stringify(toJS(this.props.states))),
            React.createElement("button", { onClick: HomeStore.onAddAge }, "\u6536\u62FE\u6536\u62FE"),
            React.createElement(Link, { to: "/user" }, "\u53BB\u7528\u6237\u4E2D\u5FC3")));
    }
};
default_1 = __decorate([
    observer,
    __metadata("design:paramtypes", [Object])
], default_1);
export default default_1;
//# sourceMappingURL=index.js.map