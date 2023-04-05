import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, globalStyles } from '../theme/main';

type ActiveRoute = "MoviesStack" | "Favorites"

export const DrawerComponent = (props: DrawerContentComponentProps) => {
    const [activeRoute, setActiveRoute] = useState<ActiveRoute>("MoviesStack");

    useEffect(() => {
        const lastState = props.state.history[props.state.history.length - 1];
        if (lastState.type == 'route') {
            const route = props.state.routes.find(r => r.key == lastState.key);
            setActiveRoute(route?.name as ActiveRoute);
        }
    }, [props])


    function getActiveStyle(route: ActiveRoute) {
        if (activeRoute == route) {
            return styles.active;
        }
    }

    return (
        <DrawerContentScrollView style={{ backgroundColor: "#1d1e1f" }}>
            <View style={styles.menu}>
                <Image source={{
                    uri: "https://openai-labs-public-images-prod.azureedge.net/user-4ctffdfwOBVKwaB4cXaJkgFu/generations/generation-420AgKJc8BQBmx9UjFftzaCz/image.webp"
                }} style={styles.avatar} />
                <Text style={styles.text}>{"Movies App"}</Text>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={[styles.option, getActiveStyle('MoviesStack')]} onPress={() => props.navigation.navigate("MoviesStack")}>
                        <Text style={styles.textOption}>
                            <Icon name="grid" size={30} color={colors.primary.color} /> Gallery
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.option, getActiveStyle('Favorites')]} onPress={() => props.navigation.navigate("Favorites")}>
                        <Text style={styles.textOption}>
                            <Icon style={{marginTop: 50}} name="heart-outline" size={30} color={colors.primary.color} /> Favorites
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.primary.color
    },
    menu: {
        padding: 5,
        paddingLeft: 15,
        backgroundColor: "#1d1e1f",
    },
    textOption: {
        fontSize: 20,
        color: "white",
        alignItems: 'center'
    },
    text: {
        color: colors.primary.color,
        fontSize: 30,
        fontWeight: "bold"
    },
    option: {
        margin: 5
    },
    active: {
        opacity: 0.7,
        backgroundColor: "#000",
        padding: 10,
        marginLeft: -5
    },
    optionsContainer: {
        marginTop: 70,
        marginLeft: 10,
    },
});
