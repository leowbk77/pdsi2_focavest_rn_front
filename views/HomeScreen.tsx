import { Text, View,StyleSheet,  Button} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '@/styles/color';

import Header from '@/components/Header';
import NextVests from '@/components/NextVests';
import DailyActivities from '@/components/DailyActivities';
import WeekSummary from '@/components/WeekSummary';

import {Platform, StatusBar } from 'react-native';

const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const HomeScreen = () => {

  return (
    <View style={styles.mainView}>
        
      <Header top={top} iconhref='/config'>
      </Header>

      <View style={styles.welcomeHeader}>
        <Text style={styles.headersText}>Bem Vindo(a)</Text>
        <View style={styles.hr}></View>
        <Text>Atividades diárias</Text>
      </View>

      <View style={styles.dailyActivities}>
        <DailyActivities />
      </View>

      <View style={styles.nextVestsHeader}>
        <Text style={styles.headersText}>Próximos vestibulares</Text>
        <View style={styles.hr2}></View>
      </View>

      <View style={styles.nextVests}>
        <NextVests />
      </View>
      
      <View style={styles.weekDataHeader}>
        <Text style={styles.headersText}>Resumo semanal</Text>
        <View style={styles.hr2}></View>
      </View>

      <View style={styles.weekDataView}>
        <WeekSummary />
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
  icon: {
      alignSelf: 'center',
  },
  welcomeHeader: {
    flexDirection: 'row',
    marginBottom: 10
  },
  hr: {
      borderBottomColor: colors.primary,
      borderBottomWidth: StyleSheet.hairlineWidth,
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
  },

  headersText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  dailyActivities: {
    flex: .7,
    marginBottom: 5,
  },

  nextVests: {
    flex: .7,
  },
  nextVestsHeader: {
    flexDirection: 'row'
  },
  hr2: {
    flex: 1,
    borderBottomColor: colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 10,
  },

  weekDataHeader: {
    flexDirection: 'row',
  },
  
  weekDataView: {
    flex: 1,
  },

});

export default HomeScreen;