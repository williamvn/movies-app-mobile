import { Movie } from "../types/MoviesDB";
import { FavoriteState } from "./FavoriteContext";

export type FavoriteReducerAction = { type: "toggle" | "add", payload: { movie: Movie } } | { type: "remove", payload: { movieId: number } };

const addFavorites = (state: Movie[], movie: Movie) => {
    return { movies: [...state, movie] };
}

const removeFavorite = (state: Movie[], movieId: number) => {
    return { movies: state.filter(fav => fav.id !== movieId) }
}

const isFavorite = (movies: Movie[], movieId: number) => {
    return movies.find(fav => fav.id === movieId);
}

export const favoriteReducer = ({ movies }: FavoriteState, action: FavoriteReducerAction): FavoriteState => {
    switch (action.type) {
        case "add":
            return addFavorites(movies, action.payload.movie);
        case "remove":
            return removeFavorite(movies, action.payload.movieId);
        case "toggle":
            if (isFavorite(movies, action.payload.movie.id)) {
                return removeFavorite(movies, action.payload.movie.id);
            }
            else {
                return addFavorites(movies, action.payload.movie);
            }
        default:
            return { movies };
    }
}