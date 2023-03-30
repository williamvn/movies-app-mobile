import React from 'react'
import { ActivityIndicator, Button, Image, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { useMovies } from '../hooks/useMovies';
import { TouchableHeaderPoster } from '../components/TouchableHeaderPoster';
import { TouchablePoster } from '../components/TouchablePoster';
import Carousel from 'react-native-snap-carousel';

export const MoviesScreen = (props: StackScreenProps<any>) => {
    const { movies, isLoading } = useMovies();

    return isLoading ?
        <ActivityIndicator color={"red"} size={60} />
        :
        (
            <View style={{ flex: 1, backgroundColor: "black" }}>

                <Carousel
                    data={movies}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 5 }}>
                            <TouchableHeaderPoster movie={item} />
                        </View>
                    )}
                    sliderWidth={500}
                    itemWidth={500}
                    autoplay
                />

                <Carousel
                    data={movies}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 30 }}>
                            <TouchablePoster movie={item} />
                        </View>
                    )}
                    sliderWidth={500}
                    itemWidth={200}
                    centerContent={true}
                />
                
            </View>
        )
}