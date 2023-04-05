import React, { createContext, useReducer } from 'react'
import { Movie } from '../types/MoviesDB';
import { favoriteReducer } from './FavoriteReducer';

export interface FavoritesStateProps {
    favorites: FavoriteState;
    isFavorite: (movieId: number) => boolean;
    toggleFavorite: (movie: Movie) => void;
    removeFavorite: (movieId: number) => void;
}

export type FavoriteState = { movies: Map<number, Movie> };

export const FavoriteContext = createContext({} as FavoritesStateProps);

export const FavoriteProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    const [favoritesState, dispatch] = useReducer(favoriteReducer, { movies: new Map() });
    return (
        <FavoriteContext.Provider value={{
            favorites: favoritesState,
            isFavorite: (movieId: number) => favoritesState.movies.has(movieId),
            toggleFavorite: (movie: Movie) => dispatch({ type: "toggle", payload: { movie } }),
            removeFavorite: (movieId: number) => dispatch({ type: "remove", payload: { movieId } })
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}