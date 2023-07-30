import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getbyNumber: (page) => apiService.get(urls.movies.byNumber(page))
}

export {
    moviesService
}
