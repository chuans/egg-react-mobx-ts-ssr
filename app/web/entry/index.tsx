import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, StaticRouter} from 'react-router-dom';
import {matchRoutes} from 'react-router-config'
import Layout from '../framework/layout/layout';
import routes from '../router/routes';
import Routers from '../router/routers';
import {createClientState, createServerState} from './states';
import 'reflect-metadata';

const clientRender = () => {
    const states = createClientState();
    ReactDOM.render(
        <div>
            <BrowserRouter>
                <Routers states={states}/>
            </BrowserRouter>
        </div>,
        document.getElementById('app')
    );
};

const serverRender = (context, options) => {
    const {url} = context.state;

    const state: Object = createServerState();

    const branch = matchRoutes(routes, url);
    const promises = branch.map(({route}) => {
        const fetch = route.component.fetch;
        return fetch instanceof Function ? fetch() : Promise.resolve(null)
    });
    return Promise.all(promises).then(data => {
        const initState = context.state;
        data.forEach(item => {
            Object.assign(initState, item);
        });
        context.state = Object.assign({}, context.state, initState);
        return () => (
            <Layout>
                <div>
                    <StaticRouter location={url} context={{}}>
                        <Routers states={state}/>
                    </StaticRouter>
                </div>
            </Layout>
        )
    });
};

export default EASY_ENV_IS_NODE ? serverRender : clientRender();



