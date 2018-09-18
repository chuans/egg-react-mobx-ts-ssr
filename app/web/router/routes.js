import React from 'react';
import { Route } from 'react-router';
import Home from '../page/home';
import User from '../page/user';

const NotFound = () => {
    return (
        <Route render={({ staticContext }) => {
            if (staticContext) {
                staticContext.status = 404;
            }
            return (
                <div>
                    <h1>404 : Not Found</h1>
                </div>
            );
        }}/>
    );
};

export default [
    {
        path: '/',
        component: Home,
        exact:true
    },
    {
        path: '/user',
        component: User,
        exact:true
    },
    {
        path: '*',
        component: NotFound
    }
];

