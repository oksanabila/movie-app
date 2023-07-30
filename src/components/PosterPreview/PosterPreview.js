import React from 'react';

import {imgLink} from "../../constants";
import css from './PosterPreview.module.css';


const PosterPreview = ({movie}) => {
    const {poster_path} = movie;
    return (
        <div className={css.imgWrap}>
            <div className={css.imgContent}>
                <div className={css.img} style={{backgroundImage: `url(${imgLink}/${poster_path})`}}></div>
            </div>
        </div>
    );
};

export {PosterPreview};
