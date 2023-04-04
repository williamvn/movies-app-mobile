import { useEffect, useState } from "react"
import { getMovieDetails } from "../services/moviedb";
import { MovieDetails } from "../types/MoviesDB";


export const useMovieDetails = (movieId: number) => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails>();

    useEffect(() => {
        getMovieDetails(movieId).then((details) => setMovieDetails(details));
    }, []);

    return { movieDetails };
}