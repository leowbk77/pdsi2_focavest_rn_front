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
    const {tasks} = useTaskInfo();

    const uniqueDates = [...new Set(tasks.map(task => task.data))];
    const sections = uniqueDates.map(date => ({
      title: date,
      data: tasks.filter(t => t.data === date),
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
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Nenhuma rotina encontrada.</Text>
                }
                renderItem={({ item }) => (
                    <RotinaBox task={item} icon="math"/>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.dateTitle}>{title}</Text>
                )}/>
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
        padding: '1%',
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