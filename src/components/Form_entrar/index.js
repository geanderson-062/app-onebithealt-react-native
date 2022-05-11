import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

import styles from './style'; //importando o style

//importando o subtitulo
import Subtitle_entrar from '../Subtitle_entrar/index'

export default function Form_entrar () {

    return (

      //keyboard type e o tipo de teclado, especificamente o teclado numerico

      <View style={styles.formContext}>
            <View style={styles.form}>


                 {/*Label*/}
                 <Text style={styles.formLabel}>Usuário:</Text>

                 {/*campo de digitar*/}
                 <TextInput 
                 style={styles.input}
                 onChangeText={0}
                 //value={0}
                 placeholder='jose@gmail.com'
                 
                 />
                 
                 {/*Label*/}
                 <Text style={styles.formLabel}>Senha:</Text>

                 {/*campo de digitar*/}
                 <TextInput
                   style={styles.input}
                   onChangeText={0}
                   //value={0}
                   placeholder='jose123456'
                   
                 />
               
                 {/*botãos com efeito*/}
                 <TouchableOpacity 
                    style={styles.buttonCalculator}
                 >

                 {/*texto dentro do botão*/}  
                 <Text style={styles.textbuttonCalculator}>Entrar</Text>
                 
                 </TouchableOpacity>

                 <br/><br/>
                 <Subtitle_entrar/>
 
            </View> 

           {/*resultado do imc*/}
           

      </View>

    );
  }