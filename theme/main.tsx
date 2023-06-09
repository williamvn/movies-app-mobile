import { StyleSheet } from "react-native";

export const colors = StyleSheet.create({
    background: {
        color: "#000"
    },
    contrast: {
        color: "white"
    },
    primary: {
        color: "#E50914"
    }
});


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingBottom: 50,
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
    },
    paragraph: {
        fontSize: 15,
        color: "white",
        paddingHorizontal: 2,
        fontFamily: "sans-serif-light"
    },
    subparagraph: {
        fontSize: 12,
        color: "#d3d3d3",
        paddingHorizontal: 2,
        fontFamily: "sans-serif-light",
        lineHeight: 14.5
    },
    mv10: {
        marginVertical: 10
    },
    text: {
        fontSize: 12,
        color: "#d3d3d3",
    },
    text2: {
        fontSize: 17,
        color: "#d3d3d3",
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    }
});