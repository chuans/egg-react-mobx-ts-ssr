/**
 * Created with File
 * Author: Chuans
 * Github: https://github.com/chuans
 * Date: 2018/9/18
 * Time: 下午4:46
 */

import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Link } from 'react-router-dom';
import HomeStore from '../home/store';


@observer
export default class extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <h1>详情页</h1>
                <h2>{HomeStore.age}</h2>
                <button onClick={HomeStore.onAddAge}>测试看看</button>
                <Link to="/">去首页</Link>
            </div>
        )
    }
}
