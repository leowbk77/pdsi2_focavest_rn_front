import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

/* Componente de teste - nao usado mais*/

type Props = PropsWithChildren<{
    title: string
}>;

const Button = ({title}: Props) => {
    return (
    <Pressable style={styles.btn}>
        <Text style={styles.title}>{title}</Text>
    </Pressable>
    );
};

// https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#82BFAB',
        borderRadius: 10,
        minHeight: '10%',
        maxHeight: '15%',
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        textAlign: 'center',
    }
});

export default Button;