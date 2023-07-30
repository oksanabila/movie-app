import React from 'react';

import { Rating } from '@mui/material';
import css from '../MoviesList/MoviesListCard/MoviesListCard.module.css'
const StarsRating = ({vote_average}) => {
    const vote = vote_average / 2;
    return (
        <div className={css.voteWrap}>
            <Rating name="size-small"
                    value={vote}
                    size="small"
                    max={5}
                    precision={0.5}
                    readOnly={true}/>
        </div>
    );
};

export {StarsRating};
