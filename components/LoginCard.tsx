import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import LoginInput from "./LoginInput";
import Button from "./Button";

const LoginCard = () => {
    return (
        <View style={styles.container}>
            <LoginInput placeholderTxt="Login"/>
            <LoginInput placeholderTxt="Password"/>
            <Button title="Login"></Button>
            <Text style={styles.txt}>
                Não registrado?
                <Link href="/sign-up" style={styles.link}> Registre-se</Link>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 20,
        width: '90%',
        height: '50%',
    },
    txt: {
        marginLeft: '5%',
        color: 'white'
    },
    link: {
        color: 'green'
    }
});

export default LoginCard;