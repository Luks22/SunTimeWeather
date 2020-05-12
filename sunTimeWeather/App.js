import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TelaPrincipal from "./src/Pages/TelaPrincipal";

export default function App() {
  return (
    <View style={styles.container}>
      <TelaPrincipal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
