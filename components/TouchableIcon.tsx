import React, { useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Animated, Text, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../theme/main';

interface TouchableIconProps {
    iconName: string;
    title?: string;
    size?: number;
    color?: string;
    onPress?: () => any;
    style?: StyleProp<ViewStyle>;
    animationRatio?: number;
}

export const TouchableIcon = (props: TouchableIconProps) => {
    const {
        iconName,
        title,
        size = 40,
        color = "white",
        onPress = () => { },
        animationRatio
    } = props;

    styles.animatedView.width = animationRatio ?? 100;
    styles.animatedView.height = animationRatio ?? 100;

    const scaleAnim = useRef(new Animated.Value(1)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    const handlePressIn = () => {
        Animated.parallel([
            Animated.timing(scaleAnim, {
                toValue: 1.3,
                duration: 100,
                useNativeDriver: false,
            }),
            Animated.timing(opacityAnim, {
                toValue: 0.6,
                duration: 100,
                useNativeDriver: false,
            })
        ]).start();
    }

    const handlePressOut = () => {
        Animated.parallel([
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false,
            }),
            Animated.timing(opacityAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            })
        ]).start(() => {
            onPress();
        });
    }

    const animatedStyle = {
        transform: [{ scale: scaleAnim }],
        opacity: opacityAnim,
    };

    return (
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} style={props.style}>
            <View style={styles.iconWrapper}>
                <Icon name={iconName} size={size} color={color} />
                <Animated.View style={[styles.animatedView, animatedStyle]} />
                {title && <Text style={globalStyles.text}>{title}</Text>}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    animatedView: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 50,
        width: 100,
        height: 100,
    },
});
