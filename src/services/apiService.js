import axios from "axios";

import {baseURL} from "../constants";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDg5YmI5OTQzYTRlNGJkZjk3MzcxMTIwYjM0NjA2MCIsInN1YiI6IjY0YmVhODgwYjg2NWViMDBjNTg4ZDUwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmuVtsvHl2y2sgVkxYHZdq4WLqqvtlxJvgi0G_o4YIk';
const apiService = axios.create({
    baseURL,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    }
});


export {
    apiService
}
