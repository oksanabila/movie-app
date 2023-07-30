import React from "react";

import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import {MoviePage} from "../pages/MoviePage/MoviePage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
    },
    {
        path: '/movie/:movieId',
        element: <MoviePage/>
    },
    {
        path: '*',
        element:  <NotFoundPage/>
    }
]);

export {router};
