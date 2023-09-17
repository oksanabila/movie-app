import React, {useEffect} from 'react';

import css from './MoviesList.module.css'
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import { fetchMovies, fetchGenres, setError, setCurrentPage } from '../../redux';

const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);
    const genres = useSelector((state) => state.movies.genres);
    const currentPage = useSelector((state) => state.movies.currentPage);
    const isLoading = useSelector((state) => state.movies.isLoading);
    const error = useSelector((state) => state.movies.error);

    useEffect(() => {
        dispatch(fetchMovies(currentPage))
            .then(() => dispatch(fetchGenres()))
            .catch((error) => dispatch(setError(error.message)));
    }, [dispatch, currentPage]);

    const handleNextPage = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div>
            <div className={css.titleWrap}>
                <h1>Movies list</h1>
                <div className={css.paginationWrap}>
                    <button className={css.paginationBtn} onClick={handlePrevPage} disabled={currentPage === 1}>Prev page</button>
                    <div className={css.pageNum}>page {currentPage}</div>
                    <button className={css.paginationBtn} onClick={handleNextPage}>Next page</button>
                </div>
            </div>
            <div className={css.itemsWrap}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} genres={genres}/>)}
            </div>
            <div className={css.paginationWrap}>
                <button className={css.paginationBtn} onClick={handlePrevPage} disabled={currentPage === 1}>Prev page</button>
                <div className={css.pageNum}>page {currentPage}</div>
                <button className={css.paginationBtn} onClick={handleNextPage}>Next page</button>
            </div>
        </div>
    );
};

export {MoviesList};
