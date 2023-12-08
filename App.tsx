import React, { useState } from 'react';

import {
  Alert,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Encabezado from './src/components/Encabezado';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
function App(): JSX.Element {
  const [presupuesto,setPresupuesto]=useState(0)
  const [bandera,setBandera]=useState(false)
  const[gastos,setGastos]=useState([])
  const [modalGastos,setModalGastos]=useState(false) 

  const asignapresupuesto=(itempresupuesto)=>{
    if(itempresupuesto>0)
    {
      setBandera(true)

    }
    else{
      setBandera(false)
      Alert.alert(
        'Error','El presupuesto debe ser mayor a 0',[{text:'Aceptar'}]
      )
    }
  }

  const agregagasto=(nuevogasto)=>{
    nuevogasto.id=Date.now()
    if(Object.values(nuevogasto).includes(''))
    {
      Alert.alert(
        'Error','Todos los campos son obligatorios',[{text:'Aceptar'}]
      )
    }
    else{
      nuevogasto.id=Date.now()
  console.log(nuevogasto)
      setGastos([...gastos,nuevogasto])
    }
  }
  return (
   <SafeAreaView style={styles.contenedor}>
    <View style={styles.encabezado}>
<Encabezado></Encabezado>
{bandera===true?(
<ControlPresupuesto 
presupuesto={presupuesto} 
gastos={gastos}
setModalGastos={setModalGastos}
 />):(
  <NuevoPresupuesto presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}
     asignapresupuesto={asignapresupuesto}
     setModalGastos={setModalGastos}
     />
  
  )}
      
    </View>
    <Modal visible={modalGastos}>
    <FormularioGasto setModalGastos={setModalGastos} agregagasto={agregagasto}></FormularioGasto>
    </Modal>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#f2f5f5',
    flex:1
  },
  encabezado:{
    backgroundColor:'#15A3EB'
  }
});

export default App;
