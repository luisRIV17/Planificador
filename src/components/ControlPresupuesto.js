import React, { useEffect, useState } from 'react'
import {
    Image,
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
  import estilosgenerales from '../styles';
const ControlPresupuesto = ({presupuesto,gastos,setModalGastos}) => {
  const [gastado,setGastado]=useState(0)
  const [disponible,setDsiponible]=useState(0)
  const [total, setTotal]=useState(0)

  useEffect(()=>{
    console.log(gastos)
    const totalGasto=gastos.reduce((total,item)=>total+Number(item.valor),0)
    setGastado(totalGasto)
    setDsiponible(presupuesto-totalGasto)
    
  },[gastos])

  return (
    <View style={styles.cont}>
        <View style={styles.contimg}>
            <Image style={styles.img} source={require('../Img/grafico.jpg')}></Image>
        </View>
            <View>
        <Text style={styles.contenedortextos}><Text style={styles.label1}>Presupuesto:</Text>{' Q.'}{presupuesto}</Text>
        </View>
        <View >
          <Text style={styles.contenedortextos}><Text style={styles.label1}>Gastado:</Text>{' Q.'}{gastado}</Text>
        </View>
        <View>
          <Text style={styles.contenedortextos}><Text style={styles.label1}>Disponible:</Text>{' Q.'}{disponible}</Text>
        </View>
        <Pressable onPress={()=>setModalGastos(true)}>
          <Text>Agregar</Text>
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
    contenedortextos:{
      textAlign:'center',
      fontSize:20,
    },
    label1:{
      fontWeight:'bold',
      fontSize:20,
      color:'#0083fa'
    },
    contimg:{
      justifyContent: 'center',
    alignItems: 'center',
     marginBottom:15
    },
    img:{
      width: 200, 
    height: 200,
    }
})
export default ControlPresupuesto