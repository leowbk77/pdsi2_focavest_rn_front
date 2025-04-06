import { StyleSheet, ImageBackground, Text, View, Button, TextInput, ScrollView } from "react-native";
import { Link, router } from "expo-router";
import { Image } from 'expo-image';
import { colors } from "@/styles/color";

const Login = () => {
    return (
        <ImageBackground
        source={require('@/assets/images/focavestbkg.jpg')}
        style={styles.backgroundImg}
        resizeMode='cover'>
          
            <View style={styles.headerImg}>
              <Image style={styles.imgsize} source={require('@/assets/images/FocaVestWLogo.png')} contentFit='fill'/>
            </View>

            <View style={styles.loginContainer}>
              
              <View style={styles.titleView}>
                <Text style={styles.headerTitleTxt}>Login</Text>
                <Text style={styles.headerTxt}>Não tem uma conta? <Link href="/sign-up" style={styles.link}> Registre-se</Link> </Text>
              </View>
              
              <View style={styles.inputsView}>
                <View>
                  <Text>Email</Text>
                  <TextInput style={styles.input} placeholder=" email@email.com" inputMode="email" placeholderTextColor={colors.placeholderText}></TextInput>
                </View>
                <View>
                  <Text>Password</Text>
                  {/* https://www.geeksforgeeks.org/how-to-show-and-hide-password-in-react-native/ */}
                  <TextInput style={styles.input} placeholder=" Password" secureTextEntry={true} placeholderTextColor={colors.placeholderText}></TextInput>
                </View>
              </View>

              <View style={styles.pwOptionsView}>
                <Text>[ ] Lembrar-me</Text>
                {/*https://github.com/WrathChaos/react-native-bouncy-checkbox*/}
                <Link href="/sign-up" style={styles.link}> Esqueceu a senha?</Link>
              </View>

              <Button title="Entrar" onPress={() => router.push("/(main)/home")} color={colors.primary} />

            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    alignItems: 'center',
  },
  titleView: {
    alignItems: 'center',
    padding: '10%',
  },
  inputsView: {

  },
  headerTitleTxt: {
    color: colors.headerText,
    fontWeight: 'bold',
    fontSize: 30
  },
  loginContainer: {
      backgroundColor: colors.secondary,
      borderRadius: 20,
      padding: '5%',
  },
  txt: {
      color: 'grey'
  },
  headerTxt: {
      color: 'grey',
      marginTop: '5%',
  },
  link: {
      color: colors.primary,
  },
  input: {
      color: colors.text,
      height: 50,
      marginBottom: '5%',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'rgba(26 28 30 / .2)',
  },
  pwOptionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  headerImg: {
    width: '25%',
    height: '10%',
    marginTop: '10%',
    marginBottom: '10%'
  },
  imgsize: {
    width: '100%',
    height: '100%',
  },
});

export default Login;