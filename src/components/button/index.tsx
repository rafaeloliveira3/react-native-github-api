import React from "react";
import { View, Text, TextInputProps, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from "react-native";
import { style } from "./styles";

type buttonProps = TouchableOpacityProps & {
    buttonText?: String,
    loading?: boolean
}

export function Button ({buttonText, ...rest}: buttonProps) {
    return (
        <View style={{alignItems:'center'}}>
            <TouchableOpacity 
                style={style.button}
                {...rest}
            >
                {rest.loading ? <ActivityIndicator /> : <Text style={style.buttonText}>{buttonText}</Text>}
            </TouchableOpacity>
        </View>
    )
}