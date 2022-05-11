import React from 'react'
import {View,Image} from 'react-native'

//importando o style
import styles from './style'

//criando componente img_home
export function Img_entrar() {
  
    return (

      <View style={styles.container}>
            <Image style={styles.imagem} source={require('../../img/imgHome.png')}/>
      </View>
    
    )
     
  }