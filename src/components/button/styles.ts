import { themes } from "@/global/themes";
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    button: {
        width: 200,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: themes.colors.default
    }
})