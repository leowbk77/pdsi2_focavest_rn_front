import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "@/styles/color";

type Props = PropsWithChildren<{
    size: number,
    title: string,
    onPress?: () => void,
    disable?: boolean,
}>;

const MainButton = ({title, onPress = () => {}, disable = false, size}: Props) => {
    const colorBg = disable ? colors.buttonDisabled : colors.primary;
    return (
    <Pressable style={[styles.btn , {backgroundColor: colorBg, height: size}]} onPress={onPress} disabled={disable} android_ripple={{radius: 5}}>
        <Text style={styles.title}>{title}</Text>
    </Pressable>
    );
};

// https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default MainButton;