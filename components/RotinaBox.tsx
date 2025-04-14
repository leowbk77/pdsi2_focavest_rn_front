import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/styles/color";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    materia?: string
}>;

const RotinaBox = ({materia,}: Props) => {
    return (
        <View style={styles.main}>
            <View style={styles.leftView}></View>
            <View style={styles.rightView}>
                <View>
                    <Text>{materia}</Text>
                </View>
                <View></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        padding: '2%',
        boxShadow: '1 1 3 3 ' + colors.placeholderText,
        marginBottom: 10,
        height: 120,
    },
    leftView: {
        flex: .2,
        borderRightWidth: 10,
        borderColor: colors.primary,
    },
    rightView: {
        flex: 9,
    },

});

export default RotinaBox;