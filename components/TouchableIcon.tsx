import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface TouchableIconProps {
    name: string;
    size?: number;
    color?: string;
    onPress?: () => {};
}

export const TouchableIcon = (props: TouchableIconProps) => {
    const {
        name,
        size = 60,
        color = "white",
        onPress = () => { }
    } = props;

    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.1}>
            <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
    }
});