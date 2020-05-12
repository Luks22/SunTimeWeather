import React, { useState } from 'react';

import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';



const CidadeInput = (props) => {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);


    const capturarLatitude = (latitude) => {

        setLatitude(latitude);
    }

    const capturarLongitude = (longitude) => {

        setLongitude(longitude);
    }


    return (

        <View>
            <View style={styles.coordenadasInputBox}>
                <TextInput
                    placeholder="Digite a latitude de uma cidade"
                    value={latitude.toString()}
                    onChangeText={capturarLatitude}
                    style={styles.coordenadasInputText}
                />

                <TextInput
                    placeholder="Digite a longitude de uma cidade"
                    value={longitude.toString()}
                    onChangeText={capturarLongitude}
                    style={styles.coordenadasInputText}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    props.onSalvar(latitude, longitude);
                }}
                style={styles.botao}>
                <Text style={styles.iconeBotao}>Procurar</Text>
            </TouchableOpacity>
        </View>

    );



}


const styles = StyleSheet.create({

    coordenadasInputText: {
        width: "100%",
        maxWidth: 200,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        borderEndWidth: 50,
        padding: 2,
        paddingBottom: 2,
    },

    coordenadasInputBox: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingTop: 10,
        right: 50
    },

    botao: {
        position: 'absolute',
        width: 70,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: -40,
        bottom: 15,
        top: 25,
        backgroundColor: "white",
        borderRadius: 30,
        elevation: 8
    },

    iconeBotao: {
        fontSize: 10,
        color: "blue",
    },


});

export default CidadeInput;


