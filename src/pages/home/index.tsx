import React, { useEffect, useState } from "react";
import { Text, View, Image, TextInput, Touchable, TouchableOpacity, Alert, ActivityIndicator} from "react-native"
import { style } from "./styles"
import axios from "axios";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/routes/index.routes";
import Card from "@/components/cards";


type HomeScreenRouteProp = RouteProp<RootStackParamList, "home">;
type Repo = {
    id: number,
    name?: string,
    description?: string,
    html_url?: string
}

export default function Home () {
    const route = useRoute<HomeScreenRouteProp>();
    const { username } = route.params
    const [repos, setRepos] = useState<Repo[]>([])

    useEffect(() => {
        const fetchRepos = async () => {
            const data = await axios.get(`https://api.github.com/users/${username}/repos`)
            .catch(error => {
                if (error?.request?.status === 404) {
                    return Alert.alert("Algo deu Errado", "Tente novamente mais tarde")
                }
            })
            if(data) {
                setRepos(data?.data)
            }
        }
        fetchRepos()
    }, [username])
    

    return (
        <View style={style.container}>
            <Text>Lista de Repositórios</Text>
            <View>
                {repos?.map(item => <Card key={item?.id} name={item?.name} description={item?.description} html_url={item?.html_url}/>)}
            </View>
        </View>
    )
}