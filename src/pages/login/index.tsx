import React, { useState } from "react";
import { Text, View, Image, TextInput, Touchable, TouchableOpacity, Alert, ActivityIndicator} from "react-native"
import { style } from "./styles"
import Logo from "@/assets/img/logo.png"
import axios from "axios";
import { useNavigation, NavigationProp } from '@react-navigation/native'
 
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/routes/index.routes";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "login">;

export default function Login () {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleSearch = async () => {
        setLoading(true)
        if (!userName) {
            setLoading(false)
            return Alert.alert("Campos Obrigatórios", "Para prosseguir, é necessário informar um Username")
        }
        
        const data = await axios.get(`https://api.github.com/users/${userName}`)
        .catch(error => {
            if (error?.request?.status === 404) {
                setLoading(false)
                return Alert.alert("Usuário não encontrado", "Insira outro usuário!")
            }
        })
        if (data) {
            setLoading(false)
            navigation.navigate("home", {username: userName})
        }
    }

    return (
        <View style={style.container}>
            <View style={style.smallBox}>
                <Image
                    source={Logo}
                    style={{
                        height:110,
                        width:110,
                        resizeMode: 'contain',
                    }}
                />
                <Text style={style.title}>Seja bem vindo!</Text>
            </View>
            <View style={style.middleBox}>
                <Input 
                    label="GITHUB USERNAME:"
                    value={userName}
                    onChangeText={(user) => setUserName(user)} 
                />
                <Button
                    buttonText="Pesquisar"
                    loading={loading}
                    onPress={()=>handleSearch()}
                />
                {/* <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>handleSearch()} style={style.button}>
                        {loading ? <ActivityIndicator /> : <Text style={style.buttonText}>Pesquisar</Text>}
                    </TouchableOpacity>
                </View> */}
            </View>
            <Text style={style.footerText}>Acessar a documentação da API do GITHUB</Text>
        </View>
    )
}