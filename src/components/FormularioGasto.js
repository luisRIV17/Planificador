import React, {useState} from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import estilosgenerales from '../styles'
import {Picker} from '@react-native-picker/picker';
const FormularioGasto = ({setModalGastos,agregagasto}) => {
    const [nombre,setNombre] = useState('')
    const [valor,setValor] = useState(0)
    const [caategoria, setCategoria]=useState('')

    
  return (
    <SafeAreaView style={style.formulario}>
    <Pressable onPress={()=>setModalGastos(false)} style={style.botoncerrar} >
        <Text style={style.textoboton}>Cerrar</Text>
    </Pressable>
    <View style={estilosgenerales.cont}>
        <Text style={style.titulo}>Nuevo gasto</Text>
        <View style={style.campo}>
            <Text style={style.label}>Nombre Gasto</Text>
            <TextInput style={style.input}
            value={nombre}
            onChangeText={setNombre}
            placeholder='Nombre del gasto Ej. COMIDA'
            ></TextInput>
        </View>
        <View style={style.campo}>
            <Text style={style.label}>Valor Gasto</Text>
            <TextInput style={style.input}
              value={valor}
              keyboardType='numeric'
              onChangeText={setValor}
            placeholder='Nombre del gasto Ej. COMIDA'
            ></TextInput>
        </View>
        <View style={style.campo}>
            <Text style={style.label}>Categoria Gasto</Text>
            <Picker
            selectedValue={caategoria}
            onValueChange={(item)=>setCategoria(item)}
            >
                <Picker.Item label='-- SELECCIONE UNA CATEGORIA--' value='' />
                <Picker.Item label='Ahorro' value='ahorro'/>
                <Picker.Item label='Comida' calvalue='comida'aue />
                <Picker.Item label='Salud' value='salud'/>
                <Picker.Item label='Gastos Varios' value='gastos'/>
                <Picker.Item label='Salud' />
                  <Picker.Item label='Entretenimiento' value='entretenimiento'/>
            </Picker>
        </View>

        <Pressable
        style={style.botonagregar} onPress={()=>{agregagasto({nombre,valor,caategoria})
            setModalGastos(false)
    }}
        >
        <Text  style={style.textagregar}>Agregar Gasto</Text>
        </Pressable>
    </View>
    </SafeAreaView>
  )
}
const style=StyleSheet.create({
    formulario:{
        backgroundColor:'#0887FF',
        flex:1
    },
    botoncerrar:{
        backgroundColor:'#FA0721',
        marginVertical:20,
        marginHorizontal:10,
        padding:10
    },
    textoboton:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff',
        textTransform:'uppercase'
    },
    titulo:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        color:'#647488',
        textTransform:'uppercase'
    },
    campo:{
        marginTop:20,
    },
    label:{
        
        fontWeight:'bold',
        color:'#647488',
        textTransform:'uppercase',
        fontSize:15
    },

    input:{
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        padding:10,
        marginTop:10
    }
    ,botonagregar:{
        backgroundColor:'#1F9AFF',
        marginVertical:20,
        marginHorizontal:10,
        padding:10,
        borderRadius:10,
    },
    textagregar:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff',
        textTransform:'uppercase'
    }
})
export default FormularioGasto