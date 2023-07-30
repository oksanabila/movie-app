import React from 'react';

import {Header} from "../../components/Header/Header";
import {MoviesList} from "../../components/MoviesList/MoviesList";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <MoviesList/>
        </>
    );
};

export {MainLayout};