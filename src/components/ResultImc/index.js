import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './style'//importando o style

export default function ResultImc (props) {
  
    return (

      <View style={styles.resultImc}>

        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.numberImc}>{props.ResultImc}</Text>
       
      </View>

    );
  }
