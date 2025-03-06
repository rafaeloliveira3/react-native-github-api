import { themes } from "@/global/themes";
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: themes.colors.lightGray,
        borderColor: themes.colors.lightGray,
    },
    label: {
        fontSize: 16,
        paddingBottom:10,
        textAlign: 'left',
        fontWeight: 'regular',
        color: themes.colors.gray
    }
})