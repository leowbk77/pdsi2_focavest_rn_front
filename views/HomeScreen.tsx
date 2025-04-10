import { Text, View,StyleSheet,  } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '@/styles/color';

import ModularBox from '@/components/ModularBox';
import Header from '@/components/Header';

import {Platform, StatusBar } from 'react-native';
const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const HomeScreen = () => {
    return (
        <View style={styles.mainView}>
            
            <Header top={top} iconhref='/config'>
              <FontAwesome name="gear" size={24} color={colors.primary} style={styles.icon}/>
            </Header>

            <View style={styles.welcome}>
              <Text>Bem Vindo(a)</Text>
              <View style={styles.hr}></View>
              <Text>Atividades diárias</Text>
            </View>

            <ModularBox />

        </View>
    );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: '5%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: top,
    paddingBottom: '5%',
    minHeight: '10%',
    maxHeight: '12%',
  },
  imgsize: {
      width: '15%',
  },
  icon: {
      alignSelf: 'center',
  },
  welcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%'
  },
  hr: {
      borderBottomColor: colors.primary,
      borderBottomWidth: StyleSheet.hairlineWidth,
      width: 'auto',
      minWidth: '30%',
      alignSelf: 'stretch'
  },

});

export default HomeScreen;