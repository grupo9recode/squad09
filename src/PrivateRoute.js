import {Route, Redirect } from 'react-router-dom'
import React from 'react'
import Autenticacao from './Autenticacao'
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        Autenticacao() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ path:'/', state: { from: props.location } }} />               
        )
    }
    />
);
export default PrivateRoute;