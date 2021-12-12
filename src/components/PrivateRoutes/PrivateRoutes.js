import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({component: Component, ...routeProps}) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <Route
            {...routeProps}
            render={props =>
                isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )
};

export default PrivateRoute;
