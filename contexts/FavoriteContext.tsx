import React, { createContext, useReducer } from 'react'
import { Movie } from '../types/MoviesDB';
import { favoriteReducer } from './FavoriteReducer';

export interface FavoritesStateProps {
    favorites: FavoriteState;
    isFavorite: (movieId: number) => boolean;
    toggleFavorite: (movie: Movie) => void;
}

export type FavoriteState = { movies: Movie[] };

export const FavoriteContext = createContext({} as FavoritesStateProps);

export const FavoriteProvider = ({ children }: { children: JSX.Element[] }) => {
    const [favoritesState, dispatch] = useReducer(favoriteReducer, { movies: [] });
    let leak = 0
    return (
        <FavoriteContext.Provider value={{
            favorites: favoritesState,
            isFavorite: (movieId: number) => { console.log(++leak); return !!favoritesState.movies.find(fav => fav.id === movieId) },
            toggleFavorite: (movie: Movie) => dispatch({ type: "toggle", payload: { movie } }),
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}