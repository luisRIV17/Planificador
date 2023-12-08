import React from 'react'
import {
  Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
  } from 'react-native';

const NuevoPresupuesto = ({presupuesto,setPresupuesto,asignapresupuesto,setModalGastos}) => {

  return (
    <View style={styles.cont}>
      <Text style={styles.lablel}>Definir presupuesto</Text>
      <TextInput
      style={styles.input}
      placeholder='Ingrese monto Ej: Q.800' 
      keyboardType='numeric'
      value={presupuesto}
      onChangeText={setPresupuesto}
      ></TextInput>
      <Pressable
       style={styles.boton}
       onPress={()=>asignapresupuesto(presupuesto)}
       >
        <Text style={styles.textoboton}>Guardar Presupuesto</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
 cont:{
  backgroundColor:'white',
  marginHorizontal:15,
  borderRadius:10,
  paddingHorizontal:30,
  paddingVertical:40,
  transform:[{translateY:50}],
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,  
  elevation: 9,
 },
 lablel:{
  textAlign:'center',
  color:'#3b82f6',
  fontSize:25
 },
 input:{
  borderRadius:10,
  backgroundColor:'#f5f5f5',
  padding:10,
  textAlign:'center',
  marginTop:'20'
 },
 boton:{
  marginTop:20,
  backgroundColor:'#1048A4',
  padding:10,
  borderRadius:10
 },
 textoboton:{
  color:'white',
  textAlign:'center',
  textTransform:'uppercase'
 }
  });
export default NuevoPresupuesto