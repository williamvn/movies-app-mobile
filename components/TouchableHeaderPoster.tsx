import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Movie } from '../types/MoviesDB'
import { useNavigation } from '@react-navigation/core';
import { HeaderPoster } from './HeaderPoster';
import Icon from 'react-native-vector-icons/Ionicons';

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
            <Icon style={styles.icon} name="heart-outline" size={20} color={"white"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    button: {
        opacity: 0.9
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 100,
        zIndex: 1
    }
});