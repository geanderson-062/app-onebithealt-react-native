import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native'; 

//importando compónentes
import Title_entrar from './src/components/Title_entrar/index'
import Form_entrar from './src/components/Form_entrar/index'
import { Img_entrar } from './src/components/Img_entrar/index'

//juntando os componentes
export default function App() {

  return (

    <View style={styles.container}>
       
       <Img_entrar/> <br/><br/><br/><br/>
       <Title_entrar/>
       <Form_entrar/>
       

    </View>

  );
}

//o styles e came case 

//css styles

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#00a000',//cor de fundo da parte superior
    paddingTop:80,

  },

});