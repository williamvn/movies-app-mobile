import React from 'react'
import { ActivityIndicator, Button, Image, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { useMovies } from '../hooks/useMovies';
import { TouchableHeaderPoster } from '../components/TouchableHeaderPoster';
import { TouchablePoster } from '../components/TouchablePoster';

export const MoviesScreen = (props: StackScreenProps<any>) => {
    const { movies, isLoading } = useMovies();

    return isLoading ?
        <ActivityIndicator color={"red"} size={60} />
        :
        (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                {/* <Image source={movies[0].poster_path} /> */}
                <View style={{marginBottom: 30}}>
                    <TouchableHeaderPoster movie={movies[3]} />
                </View>
                <TouchablePoster movie={movies[0]} />
            </View>
        )
}