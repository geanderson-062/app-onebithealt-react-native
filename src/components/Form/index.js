import React, {useState} from 'react'
import { Text, TextInput , View, Button } from 'react-native'
import ResutImc from '../ResultImc/index'

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

      <View>
            <View>

                 <Text>Altura</Text>

                 <TextInput 
                 onChangeText={setHeight}
                 value={height}
                 placeholder='Ex, 1.71'
                 keyboardType='numeric'
                 
                 />

                 <Text>Peso</Text>

                 <TextInput
                   onChangeText={setWeight}
                   value={weight}
                   placeholder='Ex, 65.365'
                   keyboardType='numeric'

                 />
                 <Button onPress={() => validationImc()} title={TextButton} />
                 
           </View> 
           <ResutImc messageResultImc={messageImc} ResultImc={imc}/> 
      </View>

    );
  }