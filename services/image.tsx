import { Movie } from "../types/MoviesDB";

export const imageUri = `https://image.tmdb.org/t/p/w500`;

export function getImageUri(movie: Movie) {
    return `${imageUri}/${movie.poster_path}`;
}