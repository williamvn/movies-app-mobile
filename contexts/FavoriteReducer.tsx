import { Movie } from "../types/MoviesDB";
import { FavoriteState } from "./FavoriteContext";

export type FavoriteReducerAction = { type: "toggle" | "add", payload: { movie: Movie } } | { type: "remove", payload: { movieId: number } };

const addFavorites = (state: Map<number, Movie>, movie: Movie) => {
    state.set(movie.id, movie);
    return { movies: state };
}

const removeFavorite = (state: Map<number, Movie>, movieId: number) => {
    state.delete(movieId);
    return { movies: state };
}

export const favoriteReducer = ({ movies }: FavoriteState, action: FavoriteReducerAction): FavoriteState => {
    switch (action.type) {
        case "add":
            return addFavorites(movies, action.payload.movie);
        case "remove":
            return removeFavorite(movies, action.payload.movieId);
        case "toggle":
            if (movies.has(action.payload.movie.id)) {
                return removeFavorite(movies, action.payload.movie.id);
            }
            else {
                return addFavorites(movies, action.payload.movie);
            }
        default:
            return { movies };
    }
}