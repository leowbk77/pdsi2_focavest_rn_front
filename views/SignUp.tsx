import { StyleSheet, ImageBackground, Text, View, TextInput, Button} from "react-native";
import { Link, router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import { colors } from "@/styles/color";

const SignUp = () => {
    return (
        <ImageBackground
        source={require('@/assets/images/focavestbkg.jpg')}
        style={styles.backgroundImg}
        resizeMode='cover'>

            <View style={styles.container}>
              
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
                <View>
                  <Text>Nome</Text>
                  <TextInput style={styles.input} placeholder="" ></TextInput>
                </View>
                <View>
                  <Text>E-mail</Text>
                  <TextInput style={styles.input} placeholder=" email@email.com" inputMode="email"></TextInput>
                </View>
                <View>
                  <Text>Senha</Text>
                  <TextInput style={styles.input} placeholder=" Password" secureTextEntry={true}></TextInput>
                </View>
                <View>
                  <Text>Repita a senha</Text>
                  <TextInput style={styles.input} placeholder=" Password" secureTextEntry={true}></TextInput>
                </View>
              </View>

              <Button title='Registrar' onPress={() => router.push("/login")} color={colors.primary}/>

            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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
      width: '90%',
      minHeight: '50%',
      maxHeight: '90%',
      padding: '5%',
    },
    txt: {
        marginLeft: '5%',
        color: 'white'
    },
    link: {
        color: colors.primary
    },
    input: {
        color: 'rgba(26 28 30 / .2)',
        height: 50,
        marginBottom: '5%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(26 28 30 / .2)',
    },
  });

export default SignUp;