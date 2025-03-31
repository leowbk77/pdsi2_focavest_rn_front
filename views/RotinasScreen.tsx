import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Image } from 'expo-image';
import { colors } from '@/styles/color';

import RotinaBox from "@/components/RotinaBox";

import {Platform, StatusBar } from 'react-native';
const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const RotinasScreen = () => {
    return(
        <View style={styles.mainView}>

            <View style={styles.header}>
                <Image style={styles.imgsize} source={require('@/assets/images/FocaVestPLogo.png')} contentFit='contain'/>
                <FontAwesome5 name="plus" size={20} color={colors.primary} style={styles.icon}/>
            </View>

            <Text style={styles.h1}>ROTINAS</Text>

            <View>
                <RotinaBox />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: '5%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: top,
        paddingBottom: '5%',
        height: 50,
    },
    h1: {
        color: colors.headerText,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imgsize: {
        width: '20%',
    },
    icon: {
        alignSelf: 'center',
    },
});

export default RotinasScreen;