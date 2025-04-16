import { View, Text, StyleSheet, Button, ScrollView, FlatList , SectionList} from "react-native";
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

    // Transforma as rotinas agrupadas por data em um array para SectionList
    const sections = dates.map(date => ({
        title: date,
        data: tasks[date] || [],
    }));

    return(
        <View style={styles.mainView}>

            <Header top={top} iconhref='/add-rotina'>
                <FontAwesome5 name="plus" size={24} color={colors.primary} style={styles.icon}/>
            </Header>

            <Text style={styles.h1}>ROTINAS</Text>

            <View style={{flex:1}}>
                    <SectionList
                sections={sections}
                keyExtractor={(item, index) => `${item.materia}-${index}`}
                contentContainerStyle={styles.container}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Nenhuma rotina encontrada.</Text>
                }
                renderItem={({ item }) => (
                    <RotinaBox materia={item.materia} submateria="trigonometria" icon="math"/>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.dateTitle}>{title}</Text>
                )}
                />
                {/* <ScrollView style={{height: '100%'}} contentContainerStyle={styles.container}>
                    {dates.map(date => (
                        tasks[date].map(item => (<RotinaBox materia={item.materia}/>))
                    ))}

                    <RotinaBox materia={'teste'}></RotinaBox>
                    <RotinaBox materia={'teste'}></RotinaBox>
                    <RotinaBox materia={'teste'}></RotinaBox>
                    <RotinaBox materia={'teste'}></RotinaBox>
                    <RotinaBox materia={'teste'}></RotinaBox>
                </ScrollView> */}
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


    
  dateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginVertical: 8,
    paddingLeft: 4,
  },
  emptyText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
  },
    
});

export default RotinasScreen;