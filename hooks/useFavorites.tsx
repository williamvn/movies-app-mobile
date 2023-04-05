import { useState, useEffect } from 'react';
import { FavoriteService } from '../services/favorite';
import { Movie } from '../types/MoviesDB';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        setFavorites(getFavorites())
    }, []);

    useEffect(() => {
        FavoriteService.getInstance().favorites = favorites;
    }, [favorites]);

    const getFavorites = () => FavoriteService.getInstance().favorites;

    const addFavorites = (movie: Movie) => {
        setFavorites([...getFavorites(), movie]);
    }

    const isFavorite = (movieId: number) => {
        return getFavorites().find(fav => fav.id === movieId);
    }

    const toggleFavorite = (movie: Movie) => {
        console.log("getFavorite", getFavorites());
        if (isFavorite(movie.id)) {
            console.log("Removing")
            removeFavorite(movie.id);
        }
        else {
            console.log("Adding")
            addFavorites(movie);
        }
    }

    const removeFavorite = (movieId: number) => {
        setFavorites(getFavorites().filter(fav => fav.id !== movieId));
    }

    return { favorites, addFavorites, isFavorite, toggleFavorite, removeFavorite };
}