import { themes } from "@/global/themes";
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 40,
    },
    smallBox: {
        height:Dimensions.get('window').height/2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center'
    },
    middleBox: {
        height:Dimensions.get('window').height/2,
        width: '100%',
        flexDirection: "column",
        gap: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 30
    },
    footerText: {
        fontSize: 16,
        fontWeight: 'regular',
        color: themes.colors.gray,
        marginBottom: 40,
        textAlign: 'center'
    }
})