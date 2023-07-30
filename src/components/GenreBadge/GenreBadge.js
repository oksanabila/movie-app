import React from 'react';

import css from "./GenreBadge.module.css";

const GenreBadge = ({movie, genres}) => {
    const getGenresByIds = genreIds => {
        return genreIds.map(genreId => {
            const genre = genres.find(genre => genre.id === genreId);
            return genre ? genre.name : '';
        });
    };

    return (
        <div className={css.badgeWrap}>
            {getGenresByIds(movie.genre_ids).map(genre => (
                 <div className={css.badge} key={genre} data-name={genre}>{genre}</div>
            ))}
        </div>
    );
};

export {GenreBadge};
