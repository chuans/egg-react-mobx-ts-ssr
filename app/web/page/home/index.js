/**
 * Created with File
 * Author: Chuans
 * Github: https://github.com/chuans
 * Date: 2018/9/18
 * Time: 下午4:45
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import HomeStore from './store';
import './style.less';

@observer
export default class extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        //console.log(this)
        return (
            <div>
                <h1>首页</h1>
                <h1 style={{color: 'red'}}>{HomeStore.name}</h1>
                <h1 style={{color: 'blue'}}>{HomeStore.age}</h1>
                <h2>{JSON.stringify(toJS(this.props.states))}</h2>
                <button onClick={HomeStore.onAddAge}>点击数字增加</button>
                <Link to="/user">去用户中心</Link>
            </div>
        )
    }
}
