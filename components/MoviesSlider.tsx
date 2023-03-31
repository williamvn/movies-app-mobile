import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Movie } from '../types/MoviesDB'
import { TouchablePoster } from './TouchablePoster'

interface MoviesCarouselProps {
    movies: Movie[],
    title?: string
}

export const MoviesSlider = ({ movies, title }: MoviesCarouselProps) => {
    return (
        <View style={styles.flatListContainer}>
            <Text style={styles.flatListHeader}>{title}</Text>
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <TouchablePoster movie={item} />
                )}
                horizontal
            />

        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        height: 250,
        marginTop: 50,
        marginLeft: 5
    },
    flatListHeader: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        margin: 5,
        marginBottom: 10
    }
});