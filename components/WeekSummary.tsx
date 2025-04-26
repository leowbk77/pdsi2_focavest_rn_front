import { colors } from "@/styles/color";
import { View, Text, StyleSheet } from "react-native";

const WeekSummary = () => {
    return(
        <View style={styles.main}>

            <View style={styles.hoursView}>
                <View style={styles.circle}>
                    <Text style={{color: colors.primary, fontSize: 20, fontWeight: 'bold',}}>{'80'}%</Text>
                </View>

                <View style={styles.hoursTxtView}>
                    <Text style={[styles.hoursTxt, {color: colors.primary, fontWeight: 'bold'}]}>Tempo estudado</Text>
                    <Text style={styles.hoursTxt}>{}h estudadas de</Text>
                    <Text style={styles.hoursTxt}>{}h planejadas.</Text>
                </View>
            </View>

            <View style={styles.mostStudiedView}>
                <Text style={styles.mostStudiedTxt}>Mais estudada: </Text>
                <Text style={[styles.mostStudiedTxt,{color: colors.primary}]}>{'Matemática'}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        paddingTop: 10,
    },
    hoursView: {
        flexDirection: 'row',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        borderWidth: 5,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hoursTxtView: {
        flex: 1,
        paddingHorizontal: 10,
    },
    mostStudiedView: {
        flexDirection: 'row',
    },
    hoursTxt: {
        fontSize: 18,
    },
    mostStudiedTxt: {
        fontSize: 18,
    },
});

export default WeekSummary;