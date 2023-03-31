import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface BadgeProps {
    title: string;
    color?: string;
    width?: number;
    height?: number;
}

export const Badge = (props: BadgeProps) => {
    return (
        <View style={{ ...styles.badge, height: props.height || 20, backgroundColor: props.color || styles.badge.backgroundColor }}>
            <Text style={styles.badgeText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        marginLeft: 5,
        backgroundColor: "orange",
        borderRadius: 5,
        paddingHorizontal: 4,
        justifyContent: 'center',
        height: 20,
        marginTop: 3
    },
    badgeText: {
        fontSize: 10,
        color: "white",
        fontWeight: "bold"
    }
});