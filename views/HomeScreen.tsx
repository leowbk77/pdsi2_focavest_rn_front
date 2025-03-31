import { Text, View,StyleSheet,  } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
import { colors } from '@/styles/color';
import ModularBox from '@/components/ModularBox';

//teste - correcao do overlap da barra de status no android
import {Platform, StatusBar } from 'react-native';
const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
//teste

const HomeScreen = () => {
    return (
        <View style={styles.mainView}>
          
            <View style={styles.header}>
                <Image style={styles.imgsize} source={require('@/assets/images/FocaVestPLogo.png')} contentFit='contain'/>
                <FontAwesome name="gear" size={24} color={colors.primary} style={styles.icon}/>
            </View>

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
    margin: '5%',
    paddingTop: top,
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