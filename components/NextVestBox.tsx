import { View, Text, StyleSheet } from "react-native";
import { Vest } from "@/contexts/VestContext";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from "@/styles/color";

interface Props {
    vest: Vest,
}

const NextVestBox = ({vest}: Props) => {
    return(
        <View style={styles.main}>
            <View style={styles.top}>
                <MaterialCommunityIcons name="calendar-multiple" size={20} color={colors.primary} />
            </View>

            <View style={styles.mid}>
                <Text style={styles.text}>{vest.uni}</Text>
            </View>

            <View style={styles.bottom}>
                <Text style={styles.dateTxt}>{vest.data}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: 130,
        height: 120,
        //sombras
        //elevation: 2, // sombra no Android
        //shadowColor: '#000', // iOS
        //shadowOffset: { width: 0, height: 2 },
        //shadowOpacity: 0.1,
        //shadowRadius: 4,
        boxShadow: colors.boxShadowDefault,
        //sombras
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    top: {
    },
    mid: {
        paddingHorizontal: 2,
    },
    bottom: {
    },

    text: {
        textAlign: 'center',
    },
    dateTxt: {
        color: colors.primary,
    },

});

export default NextVestBox;