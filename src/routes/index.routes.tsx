import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "@/pages/login";
import Home from "@/pages/home";
import { themes } from "@/global/themes";

export type RootStackParamList = {
    login: undefined;
    home: { username: string };
}
const Stack = createStackNavigator<RootStackParamList>();

export default function Routes () {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor: themes.colors.default
            }
        }}>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>

    )
}