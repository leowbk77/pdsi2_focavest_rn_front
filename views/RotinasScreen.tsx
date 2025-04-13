import { View, Text, StyleSheet, Button } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colors } from '@/styles/color';

import RotinaBox from "@/components/RotinaBox";
import Header from '@/components/Header';

import { useTaskInfo } from '@/contexts/TaskContext';

import {Platform, StatusBar } from 'react-native';
const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const RotinasScreen = () => {
    const {tasks} = useTaskInfo();

    return(
        <View style={styles.mainView}>

            <Header top={top} iconhref='/config'>
                <FontAwesome5 name="plus" size={24} color={colors.primary} style={styles.icon}/>
            </Header>

            <Text style={styles.h1}>ROTINAS</Text>

            <View style={{flex: 1}}>
                <RotinaBox></RotinaBox>
                <RotinaBox></RotinaBox>
                <RotinaBox></RotinaBox>
            </View>
            

        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: '5%',
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: top,
        paddingBottom: '5%',
    },
    h1: {
        color: colors.headerText,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '5%',
    },
    imgsize: {
        width: '15%',
    },
    icon: {
        alignSelf: 'center',
    },
});

export default RotinasScreen;