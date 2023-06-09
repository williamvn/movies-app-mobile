import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Movie } from '../types/MoviesDB'
import { useNavigation } from '@react-navigation/core';

interface TouchablePosterProps {
    movie: Movie
}

export const TouchablePoster = ({ movie }: TouchablePosterProps) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
    const navigation = useNavigation<any>();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Details", movie)}>
                <Image source={{ uri }} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    image: {
        width: 150,
        height: 200,
        borderRadius: 20,
    },
});