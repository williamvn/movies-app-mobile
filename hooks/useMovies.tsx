import { useEffect, useState } from "react"
import { getMovies } from "../services/moviedb";
import { Movie, MoviesDBRes } from "../types/MoviesDB"

export const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            getMovies().then((movieRes: MoviesDBRes) => {
                setMovies(movieRes.results);
                setIsLoading(false);
            })
    }, []);

    return { movies, isLoading };

}