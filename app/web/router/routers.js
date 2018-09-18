import React, {Component} from 'react';
import {Route, Switch } from 'react-router';
import routes from './routes';

export default class extends Component {
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
