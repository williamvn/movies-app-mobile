import React from 'react'
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { useMovies } from '../hooks/useMovies';
import { TouchableHeaderPoster } from '../components/TouchableHeaderPoster';
import Carousel from 'react-native-snap-carousel';
import { MoviesSlider } from '../components/MoviesSlider';
import { Loader } from '../components/Loader';

const { width: windowWidth } = Dimensions.get('window')

export const MoviesScreen = (props: StackScreenProps<any>) => {
    const { movies, isLoading } = useMovies();
    console.log("results:", movies.length)
    return isLoading ?
        <Loader />
        :
        (
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <Carousel
                            data={movies}
                            renderItem={({ item }) => (
                                <TouchableHeaderPoster movie={item} />
                            )}
                            sliderWidth={windowWidth}
                            itemWidth={500}
                            autoplay
                            loop
                        />
                    </View>
                    <MoviesSlider movies={movies} title="Populares" />
                    <MoviesSlider movies={movies} title="Favorites" />
                </View>
            </ScrollView>

        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    }
});