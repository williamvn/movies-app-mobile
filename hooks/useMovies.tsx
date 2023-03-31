import { useEffect, useState } from "react"
import { getPlayingNowMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../services/moviedb";
import { Movie, MoviesDBRes } from "../types/MoviesDB"

export const useMovies = () => {
    const [playingNow, setNowPlaying] = useState<Movie[]>([]);
    const [populars, setPopulars] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPlayingNowMovies().then((movieRes: MoviesDBRes) => {
            setNowPlaying(movieRes.results);
            setIsLoading(false);
        });
        getPopularMovies().then((movieRes: MoviesDBRes) => {
            setPopulars(movieRes.results);
        });
        getTopRatedMovies().then((movieRes: MoviesDBRes) => {
            setTopRated(movieRes.results);
        });
        getUpcomingMovies().then((movieRes: MoviesDBRes) => {
            setUpcoming(movieRes.results);
        });
    }, []);

    return {
        playingNow,
        populars,
        topRated,
        upcoming,
        isLoading
    };

}