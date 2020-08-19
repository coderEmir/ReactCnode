import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routers from './router.config';
export default function ViewRouters() {
    return <Switch>
        {routers.map((item,index)=>{
            return <Route 
            key={index}
            path={item.path}
            exact = {item.exact}
            render = {(routeProps) => {
                return item.render(routeProps)
            }}
            ></Route>
        })}
    </Switch>
}