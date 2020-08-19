import React from 'react';
import ErrorPage from '../view/404';
import IndexView from '../view/index';

const routers = [
    {
        path: "/",
        exact: true,
        render(h) {
            return <IndexView/>
        },
    },
    {
        path: "",
        exact: false,
        render(h) {
            return <ErrorPage/>
        },
    }
]

export default routers