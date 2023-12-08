import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
const Encabezado = () => {
  return (
    <SafeAreaView  style={styles.encabezado}>
        <Text style={styles.titulo}>Planificador de gastos</Text>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
encabezado:{
    backgroundColor:'#15A3EB',
},
titulo:{
    color:'#fff',
    textAlign:'center',
    textTransform:'uppercase',
    fontWeight:'bold',
    fontSize:30,
    paddingTop:20,
    
}
});
export default Encabezado