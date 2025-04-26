import { StyleSheet, ImageBackground, Text, View, ScrollView} from "react-native";
import { Link, router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/styles/color";

import MainButton from "@/components/MainButton";
import InputBox from "@/components/InputBox";
import { useState } from "react";
import { useAuth } from "@/contexts/AutenticacaoContext";

const SignUp = () => {
  const {createNewUser} = useAuth();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const createJson = () => {
    const newUser = {};
    newUser.token = "";
    newUser.user = {};
    newUser.user.nome = nome;
    newUser.user.email = email;
    newUser.user.pw = pw;
    console.log(newUser);
  };

  const sendToApi = async () => {
    await createNewUser(nome, email, pw);
  };

  return (
    <ImageBackground
    source={require('@/assets/images/focavestbkg.jpg')}
    style={styles.backgroundImg}
    resizeMode='cover'>

        <ScrollView contentContainerStyle={styles.container}>
          
          <View>
            <Link href="/login"> 
              <AntDesign name="arrowleft" size={24} color="black" /> 
            </Link>
          </View>

          <View style={styles.titleView} >
            <Text style={styles.titleText}>Inscrever-se</Text>
            <Text>Já tem uma conta? <Link href="/login" style={styles.link}> Login</Link> </Text>
          </View>

          <View>

            <View style={styles.input}>
              <InputBox title={"Nome"} bkgColor={colors.secondary} onChangeText={text => {setNome(text)}}/>
            </View>

            <View style={styles.input}>
              <InputBox title={"E-mail"} bkgColor={colors.secondary} inputmode="email" keyboardtype="email-address" onChangeText={text => {setEmail(text)}}/>
            </View>

            <View style={styles.input}>
              <InputBox title={"Senha"} bkgColor={colors.secondary} isSecure={true}/>
            </View>

            <View style={styles.input}>
              <InputBox title={"Repita a senha"} bkgColor={colors.secondary} isSecure={true} onChangeText={text => {setPw(text)}}/>
            </View>

          </View>

          <View style={styles.input}>
            <MainButton title="Registrar" onPress={/*createJson*/sendToApi} disable={false} size={50}/>
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
      paddingTop: '25%',
    },
    titleView: {
      paddingBottom: '10%',
    },
    titleText: {
      color: colors.headerText,
      fontWeight: 'bold',
      fontSize: 30
    },
    container: {
      backgroundColor: colors.secondary,
      borderRadius: 20,
      padding: '5%',
      width: '100%',
    },
    link: {
      color: colors.primary
    },
    input: {
      marginBottom: 20,
    },

  });

export default SignUp;