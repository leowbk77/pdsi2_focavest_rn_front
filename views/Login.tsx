import { StyleSheet, ImageBackground, Text } from "react-native";
import LoginCard from '@/components/LoginCard';

// criar 2 views separadas para estilizacao
// 1a pro login card
// 1a pra imagem como no https://github.com/wiscaksono/tunnel-bear-login-page
const Login = () => {
    return (
        <ImageBackground
        source={require('@/assets/images/focavestbkg.jpg')}
        style={styles.backgroundImg}
        resizeMode='cover'>
            <Text style={styles.titleText}>Login</Text>{/* CRIAR UM COMPONENTE DE HEADER TEXT vide: https://reactnative.dev/docs/text */}
            <LoginCard />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: '#82BFAB',
    alignSelf: 'left',
    marginLeft: '5%',
    marginBottom: '5%',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default Login;