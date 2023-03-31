import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'
import { globalStyles } from '../theme/main'
import LinearGradient from 'react-native-linear-gradient';
import { Movie } from '../types/MoviesDB';
import { getImageUri } from '../services/image';

interface HeaderPosterProps {
    movie: Movie;
    height?: number | string;
}

export const HeaderPoster = ({ movie, height = 400 }: HeaderPosterProps) => {
    const uri = getImageUri(movie);

    return (
        <>
            <Image source={{ uri }} style={{ width: "100%", height: height }} />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,1)']}
                style={styles.gradient}
            />
            <Text style={styles.title}>{movie.title}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        zIndex: 1,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 20,
    },
    title: {
        ...globalStyles.title,
        zIndex: 1000,
        textAlign: 'left',
        position: 'absolute',
        bottom: 0,
        fontWeight: "bold",
        width: "70%"
    }
});