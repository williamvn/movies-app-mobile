import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Movie } from '../types/MoviesDB'
import { useNavigation } from '@react-navigation/core';
import { HeaderPoster } from './HeaderPoster';
import { TouchableIcon } from './TouchableIcon';
import { FavoriteContext } from '../contexts/FavoriteContext';

interface TouchablePosterProps {
    movie: Movie
}

export const TouchableHeaderPoster = ({ movie }: TouchablePosterProps) => {
    const navigation = useNavigation<any>();
    const { favorites, isFavorite, toggleFavorite } = useContext(FavoriteContext);
    const [isMovieFavorite, setIsMovieFavorite] = useState(false);

    useEffect(() => {
        setIsMovieFavorite(isFavorite(movie.id));
    }, [favorites]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details", movie)}>
                <HeaderPoster movie={movie} />
            </TouchableOpacity>
            <View style={styles.icon}>
                <TouchableIcon animationRatio={34} iconName={isMovieFavorite ? "heart" : "heart-outline"} size={20} color={isMovieFavorite ? "#E50914" : "white"} onPress={() => toggleFavorite(movie)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    button: {
        opacity: 0.9
    },
    icon: {
        position: 'absolute',
        bottom: 10,
        right: 100,
        zIndex: 1
    }
});