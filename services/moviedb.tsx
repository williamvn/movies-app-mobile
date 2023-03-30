import axios from "axios";
import { MoviesDBRes } from "../types/MoviesDB";

const moviesDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "d75da6ed2e2fdd86885da75d28de45c0",
        language: "en-US"
    }
});


export const getMovies = (): Promise<MoviesDBRes> => {
    return moviesDB.get("/now_playing").then(req => req.data);
}