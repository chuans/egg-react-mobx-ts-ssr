import React, {Component} from 'react';
import {Route, Switch } from 'react-router';
import routes from './routes';
/*

class Rt extends Component<RoutersProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const {path, exact, Component, states} = this.props;
        return (
            <Route
                onEnter={() => {
                    console.log(arguments);
                }}
                key={path}
                path={path}
                exact={exact}
                render={props => {
                    return <Component {...props} states={states}/>
                }}
            />
        )
    }
}
*/

export default class extends Component<RoutersProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    {routes.map((val) => {
                        return (
                            <Route
                                key={val.path}
                                path={val.path}
                                exact={val.exact}
                                render={props => {
                                    const Compoment = val.component;

                                    return <Compoment {...props} states={this.props.states}/>
                                }}
                            />
                        )
                    })}
                </Switch>
            </div>
        )
    }
}
