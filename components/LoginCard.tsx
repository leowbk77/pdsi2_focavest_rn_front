import { StyleSheet, Text, View, Button} from "react-native";
import { Link, router } from "expo-router";
import LoginInput from "./LoginInput";

const LoginCard = () => {
    return (
        <View style={styles.container}>
            <LoginInput placeholderTxt="Login"/>
            <LoginInput placeholderTxt="Password"/>
            <Button title="Login" onPress={() => router.push("/main/(tabs)/home")} color={"#82BFAB"} />
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
        marginTop: '4%',
        color: 'white'
    },
    link: {
        color: 'green'
    }
});

export default LoginCard;