import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Movie } from '../types/MoviesDB'
import LinearGradient from 'react-native-linear-gradient';

interface TouchablePosterProps {
    movie: Movie
}

export const TouchableHeaderPoster = ({ movie }: TouchablePosterProps) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <Image source={{ uri }} style={styles.image} />
            </TouchableOpacity>
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,1)']}
                style={styles.gradient}
            />
            <Text style={styles.title}>{movie.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    image: {
        width: "100%",
        height: 400
    },
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
        color: "white",
        fontSize: 40,
        fontStyle: 'italic',
        zIndex: 10000,
        textAlign: 'left',
        position: 'absolute',
        bottom: 0,
        fontWeight: "bold",
        padding: 10
    }
});