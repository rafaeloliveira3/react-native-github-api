import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { style } from "./styles";

type inputProps = TextInputProps & {
    label?: String,
}

export function Input ({label, ...rest}: inputProps) {
    return (
        <View>
            <Text style={style.label}>{label}</Text>
            <TextInput 
                style={style.input}
                {...rest}
            />
        </View>
    )
}