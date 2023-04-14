import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";

const Router = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component}  />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component}  />
            )}
        </Routes>
    );
};

export default Router;