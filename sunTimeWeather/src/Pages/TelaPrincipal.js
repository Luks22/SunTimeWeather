import React, { useState } from 'react';
import { View, StyleSheet, Text, Keyboard, FlatList , TextInput, Button} from 'react-native';
import SunInfo from '../Components/SunInfo';
import CidadeInput from '../Components/CidadeInput';


const TelaPrincipal = (props) => {
    const endPoint = "https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=hourly,current&lat=";
    const apiKey = "aed5762554a5c9a6f5ee9debceb65b23";

    const [previsoes, setPrevisoes] = useState([]);

    const obterPrevisoes = (latitude, longitude) => {
        setPrevisoes([]);

        const target = endPoint + latitude + "&lon=" + longitude + "&appid=" + apiKey;
        fetch(target).then((dados) =>
            dados.json()
        ).then((dados) =>{
            let list = dados["daily"];

            setPrevisoes(list);

            Keyboard.dismiss();
        });
    }

    const salvarCoordenadas = (latitude, longitude) => {
        if(latitude.toString() == '' || longitude.toString() == ''){
            alert("insira coordenadas válidas");
            return;
        }

        obterPrevisoes(latitude, longitude);
    }



    return (
        <View style={styles.container}>
            <View style={styles.entrada}>
                <CidadeInput onSalvar = {salvarCoordenadas}/>
            </View>
            <FlatList
                data={previsoes}
                renderItem={
                    previsao => (
                        <SunInfo sun={previsao} />
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 40,
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#F8F8FF',
    },
    entrada: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingBottom: 20,
        left:20
    },
});


export default TelaPrincipal