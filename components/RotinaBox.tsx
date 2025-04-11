import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/styles/color";

const RotinaBox = () => {
    return (
        <View style={styles.main}>
            <View style={styles.leftView}></View>
            <View style={styles.rightView}>
                <View>
                    
                </View>
                <View></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
        padding: '2%',
        boxShadow: '1 1 3 3 ' + colors.placeholderText,
        marginBottom: 10,
    },
    leftView: {
        flex: .1,
        borderRightWidth: 10,
        borderColor: colors.primary,
    },
    rightView: {
        flex: 9,
    },

});

export default RotinaBox;