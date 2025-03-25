import { Text, View,StyleSheet,  } from 'react-native';
import ModularBox from '@/components/ModularBox';

//teste - correcao do overlap da barra de status no android
import {Platform, StatusBar } from 'react-native';
const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
//teste

export default function Home() {
  return (
      <View style={styles.mainView}>
        <Text style={styles.text}>Home screen</Text>

        <ModularBox></ModularBox>
        <ModularBox></ModularBox>
        <ModularBox></ModularBox>
        <ModularBox></ModularBox>

      </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: '5%',
    justifyContent: 'space-between',
    paddingTop: top,
  },
  text: {
    color: 'black',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'black',
  },
});
