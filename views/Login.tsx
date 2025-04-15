import { StyleSheet, ImageBackground, Text, View, Button, TextInput, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AutenticacaoContext";
import { Link, router } from "expo-router";
import { Image } from 'expo-image';
import { colors } from "@/styles/color";

import MainButton from "@/components/MainButton";
import InputBox from "@/components/InputBox";

const Login = () => {
    const {loginFromJson, isAuthenticated} = useAuth();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const loginApp = async () => {
      //login
      await loginFromJson(email, pw);
      //login
    };

    useEffect(() => {
      if(isAuthenticated) {
        console.log('Autenticado: ',isAuthenticated);
        console.log('============================================================');
        router.replace('/');
      }
    }, [isAuthenticated]);

    return (

        <ImageBackground
        source={require('@/assets/images/focavestbkg.jpg')}
        style={styles.backgroundImg}
        resizeMode='cover'>

          <ScrollView contentContainerStyle={styles.container}>

            <Image style={styles.headerImg} source={require('@/assets/images/FocaVestWLogo.png')} contentFit='contain'/>

            <View style={styles.loginContainer}>
                
                <View style={styles.titleView}>
                  <Text style={styles.headerTitleTxt}>Login</Text>
                  <Text style={styles.headerTxt}>Não tem uma conta? <Link href="/sign-up" style={styles.link}> Registre-se</Link> </Text>
                </View>
                
                <View style={styles.inputsView}>
                  <View>
                    <InputBox title={"Email"} bkgColor={colors.secondary} inputmode="email" keyboardtype="email-address" onChangeText={text => {setEmail(text)}}/>
                  </View>
                  
                  <View>
                    <InputBox title={"Senha"} bkgColor={colors.secondary} isSecure={true} onChangeText={text => {setPw(text)}}/>
                  </View>
                </View>

                <View style={styles.pwOptionsView}>
                  <Text>[ ] Lembrar-me</Text>
                  {/*https://github.com/WrathChaos/react-native-bouncy-checkbox*/}
                  <Link href="/sign-up" style={styles.link}> Esqueceu a senha?</Link>
                </View>

                <View style={styles.btnView}>
                  <MainButton title="Entrar" onPress={() => loginApp()} disable={false}/>
                </View>

            </View>
          </ScrollView>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  container: {
    flexGrow: 1,
  },
  

  headerImg: {
    width: 100,
    height: 100,
    margin: '5%',
    alignSelf: 'center'
  },
  loginContainer: {
      backgroundColor: colors.secondary,
      borderRadius: 20,
      padding: '5%',
  },


  titleView: {
    alignItems: 'center',
    padding: '10%',
  },
  inputsView: {
    marginBottom: '5%'
  },
  pwOptionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10%',
  },
  btnView: {
  },


  headerTitleTxt: {
    color: colors.headerText,
    fontWeight: 'bold',
    fontSize: 30
  },
  headerTxt: {
      color: 'grey',
      marginTop: '5%',
  },
  link: {
      color: colors.primary,
  },
});

export default Login;