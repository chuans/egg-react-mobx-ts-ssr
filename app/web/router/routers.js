import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
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
export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Switch, null, routes.map((val) => {
                return (React.createElement(Route, { key: val.path, path: val.path, exact: val.exact, render: props => {
                        const Compoment = val.component;
                        return React.createElement(Compoment, Object.assign({}, props, { states: this.props.states }));
                    } }));
            }))));
    }
}
//# sourceMappingURL=routers.js.map