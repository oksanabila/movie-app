import React, {useEffect, useState} from 'react';

import {genreService} from "../../services/genreService";
const GenresList = () => {
    const [genres, setGenre] = useState([]);
    useEffect(() => {
        genreService.getAll()
            .then(({data}) => setGenre(data.genres))
            .catch(error => {
                console.error('Помилка при отриманні даних:', error);
            });
    }, [])

    return (
        <div>
            {genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
            ))}
        </div>
    );
};

export {GenresList};
