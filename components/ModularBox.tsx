import { View, StyleSheet, Pressable, Text } from "react-native";
import { colors } from "@/styles/color";

const ModularBox = () => {
    return (
        <View style={styles.mainBox}>
            <View style={styles.boxContent}></View>
            <View style={styles.boxButtons}>

                <Pressable>
                    <Text style={{color: colors.primary}}>X</Text>
                </Pressable>
                {/* BOTOES TEMPORARIOS */}
                <Pressable>
                    <Text style={{color: colors.primary}}>+</Text>
                </Pressable>

            </View>
        </View>
    );
}

//https://reactnative.dev/docs/flexbox

const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#D9D9D9',
        minHeight: '15%',
        maxHeight: '20%',
    },
    boxContent: {
        flex: 9,
    },
    boxButtons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default ModularBox;