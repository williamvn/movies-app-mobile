import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Movie } from '../types/MoviesDB'
import { useNavigation } from '@react-navigation/core';
import { HeaderPoster } from './HeaderPoster';

interface TouchablePosterProps {
    movie: Movie
}

export const TouchableHeaderPoster = ({ movie }: TouchablePosterProps) => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details", movie)}>
                <HeaderPoster movie={movie} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    button: {
        opacity: 0.9
    }
});