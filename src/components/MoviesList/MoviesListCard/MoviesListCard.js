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


// {
//     "adult": false,
//     "backdrop_path": "/hjyqNFHx5wIO8dqaRi0v2ix1wiR.jpg",
//     "genre_ids": [
//     28,
//     80,
//     27
// ],
//     "id": 808396,
//     "original_language": "en",
//     "original_title": "God Is a Bullet",
//     "overview": "Based on true events and the novel of the same name. Vice detective Bob Hightower finds his ex-wife murdered and daughter kidnapped by a cult. Frustrated by the botched official investigations, he quits the force and infiltrates the cult to hunt down the leader with the help of the cult’s only female victim escapee, Case Hardin.",
//     "popularity": 932.932,
//     "poster_path": "/5kiLS9nsSJxDdlYUyYGiSUt8Fi8.jpg",
//     "release_date": "2023-06-22",
//     "title": "God Is a Bullet",
//     "video": false,
//     "vote_average": 5.8,
//     "vote_count": 24
// },