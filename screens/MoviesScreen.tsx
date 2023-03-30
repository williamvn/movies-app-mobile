import React from 'react'
import { ActivityIndicator, Button, Image, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { useMovies } from '../hooks/useMovies';
import { TouchablePoster } from '../components/TouchablePoster';

export const MoviesScreen = (props: StackScreenProps<any>) => {
    const { movies, isLoading } = useMovies();

    return isLoading ?
        <ActivityIndicator color={"red"} size={60} />
        :
        (
            <View style={{flex: 1, backgroundColor: "black"}}>
                {/* <Image source={movies[0].poster_path} /> */}
                <TouchablePoster movie={movies[3]} />
            </View>
        )
}