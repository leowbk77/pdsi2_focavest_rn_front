import { StyleSheet, ImageBackground, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AutenticacaoContext";
import { Link, router } from "expo-router";
import { Image } from 'expo-image';
import Checkbox from "expo-checkbox";
import { colors } from "@/styles/color";

import MainButton from "@/components/MainButton";
import InputBox from "@/components/InputBox";

const Login = () => {
    const {isAuthenticated, login} = useAuth();
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [rememberMe, setRememberMe] = useState(false);

    const loginApp = async () => {
      await login(email, pw);
    };

    useEffect(() => {
      if(isAuthenticated) {
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
                  <View style={styles.inputBoxView}>
                    <InputBox title={"Email"} bkgColor={colors.secondary} inputmode="email" keyboardtype="email-address" onChangeText={text => {setEmail(text)}}/>
                  </View>
                  
                  <View style={styles.inputBoxView}>
                    <InputBox title={"Senha"} bkgColor={colors.secondary} isSecure={true} onChangeText={text => {setPw(text)}}/>
                  </View>
                </View>

                <View style={styles.btnView}>
                  <MainButton title="Entrar" onPress={() => loginApp()} disable={false} size={50}/>
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
  inputBoxView: {
    marginBottom: 20,
  },
  pwOptionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10%',
  },
  pwRememberMeView: {
    flexDirection: 'row',
  },
  pwRememberMeTxt: {
    paddingLeft: 5,
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


{/* <View style={styles.pwOptionsView}>
<View style={styles.pwRememberMeView}>
  <Checkbox color={colors.primary} value={rememberMe} onValueChange={setRememberMe}/>
  <Text style={styles.pwRememberMeTxt}>Lembrar-me</Text>
</View>
<Link href="/sign-up" style={styles.link}> Esqueceu a senha?</Link>
</View> */}
