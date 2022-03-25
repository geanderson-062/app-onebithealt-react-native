import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//componentes
import Title from './src/components/Title/index'
import Main from './src/components/Main/index'

export default function App() {
  return (
    <View style={styles.container}>
      
       <Title/>
       <Main/>

    </View>
  );
}

//o styles e came case 

//css styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});