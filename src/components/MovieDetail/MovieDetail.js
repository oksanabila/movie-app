import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import css from './MovieDetail.module.css'
import {urls as state} from "../../constants";
import {movieService} from "../../services";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import cssBadge from "../GenreBadge/GenreBadge.module.css";
import imdbLogo from '../../img/imdb.svg'


const MovieDetail = () => {
    const [movie, setMovie] = useState(state.movie.movie);
    const { movieId } = useParams();

    useEffect(() => {
        movieService.getById(movieId)
            .then(({ data }) => {
                setMovie(data);
            })
    }, [movieId])



    return (
        <div className={css.detailPage}>
            <Link className={css.goBack} to={'/'}>Go back</Link>
            {movie ? (
                <>
                    <div className={css.wrap}>
                        <PosterPreview movie={movie}/>
                        <div>
                            {movie.adult ? <div className={css.adult}>18+</div> : null}
                            <div className={css.titleWrap}>
                                <div>
                                    <h1 className={css.title}>{movie.title}</h1>
                                    {movie.tagline ? <div className={css.tagline}>tagline: {movie.tagline}</div> : null}
                                </div>
                                <a rel={"noreferrer"} target={"_blank"} href={`https://www.imdb.com/title/${movie.imdb_id}/`}>
                                    <img src={imdbLogo}/>
                                </a>
                            </div>

                            {movie.vote_average ?
                                <div className={css.votes}>
                                    <StarsRating vote_average={movie.vote_average}/>
                                    <div className={css.voteCount}>{movie.vote_count} votes</div>
                                </div>
                                : null
                            }

                            <div className={css.infoList}>
                                <div>Genres:</div>
                                <div>
                                    {movie.genres.map(genre => (
                                        <div className={cssBadge.badge} key={genre.name}
                                             data-name={genre.name}>{genre.name}</div>
                                    ))}
                                </div>
                            </div>

                            {movie.runtime ? <div className={css.infoList}>
                                <div>Runtime:</div>
                                <div>{movie.runtime} minutes</div>
                            </div> : null}
                            {movie.release_date ? <div className={css.infoList}>
                                <div>Release date:</div>
                                <div>{movie.release_date}</div>
                            </div> : null}
                            {movie.popularity ? <div className={css.infoList}>
                                <div>Popularity:</div>
                                <div>{movie.popularity}</div>
                            </div> : null}
                            {movie.budget ? <div className={css.infoList}>
                                <div>Budget:</div>
                                <div>{movie.budget}</div>
                            </div> : null}

                            {movie.spoken_languages ?
                                <div className={css.infoList}>
                                    <div>Languages:</div>
                                    <div>{movie.spoken_languages.map(language => (language.name ? language.name : language.english_name)).join(', ')}</div>
                                </div> : null
                            }

                            {movie.homepage ? <div className={css.infoList}>
                                <div>Homepage:</div>
                                <a rel={"noreferrer"} target={"_blank"} href={movie.homepage}>{movie.homepage}</a></div> : null}

                        </div>
                    </div>
                    <div className={css.wrap}>
                        <div></div>
                        <div className={css.overview}>{movie.overview}</div>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>

    );
};

export {MovieDetail};