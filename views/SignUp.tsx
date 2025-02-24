import SignUpCard from "@/components/SignUpCard";
import { StyleSheet, ImageBackground, Text } from "react-native";

const SignUp = () => {
    return (
        <ImageBackground
        source={require('@/assets/images/focavestbkg.jpg')}
        style={styles.backgroundImg}
        resizeMode='cover'>
            <Text style={styles.titleText}>SignUp</Text>
            <SignUpCard />
        </ImageBackground>
    );
};

//unificar as folhas para padroes (titleText por ex)
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

export default SignUp;