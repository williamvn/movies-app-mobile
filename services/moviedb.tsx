import axios, { AxiosError } from "axios";
import Config from "react-native-config";
import { Cast, CreditsRes } from "../types/Credits";
import { Movie, MovieDetails, MoviesDBRes } from "../types/MoviesDB";

const moviesDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: Config.API_KEY,
        language: "en-US"
    }
});


export const getPlayingNowMovies = (): Promise<MoviesDBRes> => {
    return moviesDB.get("/now_playing").then(res => res.data).catch((err: AxiosError) => {
        console.error(`Error while fetching PlayingNowMovies: [${err.code}] cause ${err.cause}`);
        throw err;
    });
}

export const getPopularMovies = (): Promise<MoviesDBRes> => {
    return moviesDB.get("/popular").then(res => res.data).catch(err => {
        console.error(`Error while fetching PopularMovies [${err.code}] cause ${err.cause}`);
        throw err;
    });
}

export const getTopRatedMovies = (): Promise<MoviesDBRes> => {
    return moviesDB.get("/top_rated").then(res => res.data).catch(err => {
        console.error(`Error while fetching TopRatedMovies [${err.code}] cause ${err.cause}`);
        throw err;
    });
}

export const getUpcomingMovies = (): Promise<MoviesDBRes> => {
    return moviesDB.get("/upcoming").then(res => res.data).catch(err => {
        console.error(`Error while fetching UpcomingMovies [${err.code}] cause ${err.cause}`);
        throw err;
    });
}

export const getCastForMovie = (movieId: number): Promise<CreditsRes> => {
    return moviesDB.get(`/${movieId}/credits`).then(res => res.data).catch(err => {
        console.error(`Error while fetching CastForMovie [${err.code}] cause ${err.cause}`);
        throw err;
    });
}

export const getMovieDetails = (movieId: number): Promise<MovieDetails> => {
    return moviesDB.get(`/${movieId}`).then(res => res.data).catch(err => {
        console.error(`Error while fetching CastForMovie [${err.code}] cause ${err.cause}`);
        throw err;
    });
}
