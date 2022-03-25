import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

//importando compónentes
import ResutImc from '../ResultImc/index'
import styles from './style';

export default function Form () {

    //calculo de imc

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState("Preencha o peso e altura");
    const [imc, setImc]= useState(null)
    const [TextButton, setTextButton]= useState("Calcular");
    
    function imcCalculator(){
      return setImc ((weight/(height*height)).toFixed(2))
    }
 
    //veriifcar se altura e peso está vazio

    function validationImc() {
      if(weight != null && height !=null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
      }
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("preencha o peso e altura")
    }

    //front end / campos de texto e botões
  
    return (

      //keyboard type e o tipo de teclado, especificamente o teclado numerico

      <View style={styles.formContext}>
            <View style={styles.form}>

                 <Text style={styles.formLabel}>Altura</Text>

                 <TextInput 
                 style={styles.input}
                 onChangeText={setHeight}
                 value={height}
                 placeholder='Ex, 1.71'
                 keyboardType='numeric'
                 
                 />

                 <Text style={styles.formLabel}>Peso</Text>

                 <TextInput
                   style={styles.input}
                   onChangeText={setWeight}
                   value={weight}
                   placeholder='Ex, 65.365'
                   keyboardType='numeric'

                 />
               
                 <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() =>{
                      validationImc()
                    }}
                 >
                 <Text style={styles.textbuttonCalculator}>{TextButton}</Text>
                 
                 </TouchableOpacity>
                 
           </View> 
           <ResutImc messageResultImc={messageImc} ResultImc={imc}/> 
      </View>

    );
  }