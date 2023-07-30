import React from 'react';

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";
import css from "../MoviesList/MoviesListCard/MoviesListCard.module.css";

const MovieInfo = ({movie, genres}) => {
    const {title, vote_average, genre_ids} = movie;

    return (
        <>
           <div>
               <StarsRating vote_average={vote_average}/>
               <div className={css.title}>{title}</div>
           </div>
            <GenreBadge movie={movie} genre_ids={genre_ids} genres={genres}/>
        </>
    );
};

export {MovieInfo};
