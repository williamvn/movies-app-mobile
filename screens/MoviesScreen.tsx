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
    const { playingNow, upcoming, topRated, populars, isLoading } = useMovies();
    return isLoading ?
        <Loader />
        :
        (
            <ScrollView>

                <View style={styles.container}>
                    <View>
                        <Carousel
                            data={playingNow}
                            renderItem={({ item }) => (
                                <TouchableHeaderPoster movie={item} />
                            )}
                            sliderWidth={windowWidth}
                            itemWidth={500}
                            autoplay
                            loop
                        />
                    </View>
                    <MoviesSlider movies={populars} title="Populares" />
                    <MoviesSlider movies={topRated} title="Top Rated" />
                    <MoviesSlider movies={upcoming} title="Upcoming" />
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