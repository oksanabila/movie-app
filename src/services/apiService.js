import axios from "axios";

import { baseURL } from "../constants";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDg5YmI5OTQzYTRlNGJkZjk3MzcxMTIwYjM0NjA2MCIsInN1YiI6IjY0YmVhODgwYjg2NWViMDBjNTg4ZDUwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmuVtsvHl2y2sgVkxYHZdq4WLqqvtlxJvgi0G_o4YIk';

const apiService = axios.create({
    baseURL,
});

apiService.interceptors.request.use(
    (config) => {
        config.headers.accept = 'application/json';
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { apiService };
