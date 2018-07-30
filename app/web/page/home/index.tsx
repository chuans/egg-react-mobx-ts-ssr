import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import HomeStore from './store';
import './style.less';

@observer
export default class extends Component<any> {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this)
        return (
            <div>
                <h1>我是是首页啊</h1>
                <h1 style={{color: 'red'}}>{HomeStore.name}</h1>
                <h1 style={{color: 'blue'}}>{HomeStore.age}</h1>
                <h2>{JSON.stringify(toJS(this.props.states))}</h2>
                <button onClick={HomeStore.onAddAge}>收拾收拾</button>
                <Link to="/user">去用户中心</Link>
            </div>
        )
    }
}