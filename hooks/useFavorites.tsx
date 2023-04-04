import { useState } from 'react';
import { Movie } from '../types/MoviesDB';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);
    const addFavorites = (movie: Movie) => {
        setFavorites([...favorites, movie]);
    }
    const isFavorite = (movieId: number) => {
        return favorites.find(fav => fav.id === movieId);
    }

    const toggleFavorite = (movie: Movie) => {
        if (isFavorite(movie.id)) {
            removeFavorite(movie.id);
        }
        else {
            addFavorites(movie);
        }
    }

    const removeFavorite = (movieId: number) => {
        setFavorites(favorites.filter(fav => fav.id !== movieId));
    }

    return { favorites, addFavorites, isFavorite, toggleFavorite, removeFavorite };
}