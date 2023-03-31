import axios from "axios";
import { MoviesDBRes } from "../types/MoviesDB";

const moviesDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "d75da6ed2e2fdd86885da75d28de45c0",
        language: "en-US"
    }
});


export const getPlayingNowMovies = (): Promise<MoviesDBRes> => {
    return moviesDB.get("/now_playing").then(req => req.data);
}

export const getPopularMovies = (): Promise<MoviesDBRes> => {
    return moviesDB.get("/popular").then(req => {
        return req.data
    });
}

export const getTopRatedMovies = (): Promise<MoviesDBRes> => {
    return moviesDB.get("/top_rated").then(req => req.data);
}

export const getUpcomingMovies = (): Promise<MoviesDBRes> => {
    return moviesDB.get("/upcoming").then(req => req.data);
}
