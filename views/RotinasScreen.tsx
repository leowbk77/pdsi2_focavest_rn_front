import { View, Text, StyleSheet, Button, ScrollView, FlatList } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colors } from '@/styles/color';

import RotinaBox from "@/components/RotinaBox";
import Header from '@/components/Header';

import { useTaskInfo } from '@/contexts/TaskContext';

import {Platform, StatusBar } from 'react-native';

import { useEffect } from "react";

const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const RotinasScreen = () => {
    const {tasks, dates} = useTaskInfo();

    return(
        <View style={styles.mainView}>

            <Header top={top} iconhref='/config'>
                <FontAwesome5 name="plus" size={24} color={colors.primary} style={styles.icon}/>
            </Header>

            <Text style={styles.h1}>ROTINAS</Text>

            <View style={{flex:1}}>
                <ScrollView style={{height: '100%'}} contentContainerStyle={styles.container}>
                    {dates.map(date => (
                        tasks[date].map(item => (<RotinaBox materia={item.materia}/>))
                    ))}

                    <RotinaBox materia={'teste'}></RotinaBox>
                    <RotinaBox materia={'teste'}></RotinaBox>
                    <RotinaBox materia={'teste'}></RotinaBox>
                    <RotinaBox materia={'teste'}></RotinaBox>
                    <RotinaBox materia={'teste'}></RotinaBox>
                </ScrollView>
            </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: '5%',
        paddingBottom: 0,
        backgroundColor: colors.viewWBackground,
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
        marginBottom: '5%',
    },
    imgsize: {
        width: '15%',
    },
    icon: {
        alignSelf: 'center',
    },

    container: {
        flexGrow: 1,
        padding: '2%',
    },
    
});

export default RotinasScreen;