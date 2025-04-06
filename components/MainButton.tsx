import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "@/styles/color";

type Props = PropsWithChildren<{
    title: string,
    onPress?: () => void,
    disable?: boolean,
}>;

const MainButton = ({title, children, onPress = () => {}, disable = false}: Props) => {
    return (
    <Pressable style={styles.btn} onPress={onPress} disabled={disable}>
        <Text style={styles.title}>{title}</Text>
        {children}
    </Pressable>
    );
};

// https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        minHeight: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default MainButton;