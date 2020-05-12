import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from '../Template/CartaoTemplate';

const SunInfo = (props) => {

  return (
      <Cartao style={styles.cartao}>
        <View style={styles.tela}>
          <View>
            <View style={styles.primeiraLinha}>
              <Image
                style={styles.imagem}
                source={{
                  uri: "https://openweathermap.org/img/wn/" +
                    props.sun.item.weather[0].icon + ".png"
                }}
              />
              <Text >Sensação térmica durante o dia: {props.sun.item.feels_like.day + "\u00B0"}</Text>
              <Text >Sensação térmica de manhã: {props.sun.item.feels_like.morn + "\u00B0"}</Text>
              <Text >Sensação térmica a tarde: {props.sun.item.feels_like.eve + "\u00B0"}</Text>
              <Text >Sensação térmica a noite: {props.sun.item.feels_like.night + "\u00B0"}</Text>
            </View>
            <View style={styles.segundaLinha}>
              <Text style={styles.valor}>Nascer do sol: {new Date(props.sun.item.sunrise * 1000).toLocaleTimeString()}</Text>
              <Text style={styles.valor}>Pôr do sol: {new Date(props.sun.item.sunset * 1000).toLocaleTimeString()}</Text>
            </View>
          </View>
        </View>
      </Cartao>
  );
}
const styles = StyleSheet.create({

  cartao: {
    marginBottom: 5,
  },
  tela: {
    flexDirection: 'row',
    width: "100%",
  },

  imagem: {
    width: 50,
    height: 50
  },

  primeiraLinha: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  segundaLinha: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  },
  valor: {
    marginHorizontal: 2,
  },

});


export default SunInfo;