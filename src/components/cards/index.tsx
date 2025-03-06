import React from "react";
import { Text, View, Image, TextInput, Touchable, TouchableOpacity, Alert, ActivityIndicator} from "react-native"

type repositoryProps = {
    key: number,
    name?: string,
    description?: string,
    html_url?: string
}
export default function Card ({key, name, description, html_url}: repositoryProps) {
    return (
        <Text>{name}</Text>
    )
}