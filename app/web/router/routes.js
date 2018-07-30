import React from 'react';
import { Route } from 'react-router';
import Home from '../page/home';
import User from '../page/user';
const NotFound = () => {
    return (React.createElement(Route, { render: ({ staticContext }) => {
            if (staticContext) {
                staticContext.status = 404;
            }
            return (React.createElement("div", null,
                React.createElement("h1", null, "404 : Not Found")));
        } }));
};
export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/user',
        component: User,
        exact: true
    },
    {
        path: '*',
        component: NotFound
    }
];
//# sourceMappingURL=routes.js.map