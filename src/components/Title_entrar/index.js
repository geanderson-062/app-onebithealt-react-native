import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style 

export default function Title_entrar() {
    
  //aqui fica o titulo do app

    return (
      
      <View style={styles.boxTitle}>

        <Text style={styles.textTitle}>Entrar</Text>

      </View>

    );
  }
