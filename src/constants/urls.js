const baseURL = 'https://api.themoviedb.org/3'

const imgLink = 'https://image.tmdb.org/t/p/w500/'

const movies = '/discover/movie'
const movie = '/movie'
const genre = '/genre/movie/list'

const urls = {
    genre,

    movies: {
        byNumber: (page) => `${movies}?page=${page}`
    },
    movie: {
        byId: (id) => `${movie}/${id}`
    }
}

export {
    baseURL,
    imgLink,
    urls
}
