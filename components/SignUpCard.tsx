import {StyleSheet, Text, View} from 'react-native';
import LoginInput from './LoginInput';
import Button from './Button';

const SignUpCard = () => {
    return (
        <View style={styles.container}>
            <LoginInput placeholderTxt='Email'/>
            <LoginInput placeholderTxt='Username'/>
            <LoginInput placeholderTxt='Password'/>
            <LoginInput placeholderTxt='Password'/>
            <Button title='Registrar'/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 20,
        width: '90%',
        minHeight: '50%',
        maxHeight: '90%'
    },
    txt: {
        marginLeft: '5%',
        color: 'white'
    },
    link: {
        color: 'green'
    }
});

export default SignUpCard;