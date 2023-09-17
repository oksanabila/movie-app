import React from 'react';

import css from './MoviesListCard.module.css'
import {Link} from "react-router-dom";
import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {MovieInfo} from "../../MovieInfo/MovieInfo";


const MoviesListCard = ({movie, genres}) => {
    const { id } = movie
    return (
        <Link to={`/movie/${id}`} className={css.item}>
            <PosterPreview movie={movie}/>
            <MovieInfo movie={movie} genres={genres}/>
        </Link>
    );
};

export {MoviesListCard};
