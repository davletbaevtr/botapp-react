import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {routes} from "./routes";
import {MAIN_ROUTE} from "../utils/consts";

const Router = () => {
    return (
            <Routes>
                {routes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                        exact={route.exact}
                    />
                )}
                <Route path="*" element={<Navigate to={MAIN_ROUTE}/>}/>
            </Routes>

    );
};

export default Router;
