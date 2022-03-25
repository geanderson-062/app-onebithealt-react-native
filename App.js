import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

//importando compónentes
import Title from './src/components/Title/index'
import Form from './src/components/Form/index'

//juntando os componentes
export default function App() {

  return (

    <View style={styles.container}>
      
       <Title/>
       <Form/>

    </View>

  );
}

//o styles e came case 

//css styles

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#e0e5e5',//cor de fundo da parte superior
    paddingTop:80,

  },

});