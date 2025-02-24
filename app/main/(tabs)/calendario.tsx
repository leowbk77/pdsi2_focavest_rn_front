import { Text, View, ImageBackground, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Calendario() {
  return (
    <ImageBackground
    source={require('@/assets/images/focavestbkg.jpg')}
    style={styles.backgroundImg}
    resizeMode='cover'>
      <View>
        <Text style={styles.text}>Calendário</Text>
        <Link href="/" style={styles.button}>
          Voltar
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
