import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingBottom: 50
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        zIndex: 1,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 20,
    },
    title: {
        color: "white",
        fontSize: 40,
        fontStyle: 'italic',
    },
    subtitle: {
        color: "#d3d3d3",
        fontSize: 20,
        fontStyle: 'italic',
    },
    row: {
        flexDirection: 'row'
    }
});