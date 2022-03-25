import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default function ResultImc (props) {
  
    return (
      <View>
        <Text>{props.ResultImc}</Text>
        <Text>{props.messageResultImc}</Text>
      </View>
    )
  }
