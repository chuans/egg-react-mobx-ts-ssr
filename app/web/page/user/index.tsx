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
                <h1>我是是详情页啊啊啊啊啊</h1>
                <h2>{HomeStore.age}</h2>
                <button onClick={HomeStore.onAddAge}>啊啊啊啊啊</button>
                <Link to="/">去首页</Link>
            </div>
        )
    }
}