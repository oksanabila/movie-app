import React, {useEffect, useState} from 'react';

import {moviesService} from "../../services/moviesService";
import {genreService} from "../../services/genreService";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenre] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        moviesService.getbyNumber(currentPage)
            .then(({data}) => setMovies(prevMovies => [...prevMovies, ...data.results]))
            .catch(error => {
                console.error('Помилка при отриманні фільмів:', error);
            });

        genreService.getAll()
            .then(({data}) => setGenre(data.genres))
            .catch(error => {
                console.error('Помилка при отриманні жанрів:', error);
            });
    }, [currentPage])

    const handleNextPage = () => {
        setMovies([])
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setMovies([])
            setCurrentPage(prevPage => prevPage - 1);
        }
    };


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
