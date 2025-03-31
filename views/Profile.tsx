import {StyleSheet, Text, View,} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
import { colors } from '@/styles/color';


import {Platform, StatusBar } from 'react-native';
const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const Profile = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.header}>
                <Image style={styles.imgsize} source={require('@/assets/images/FocaVestPLogo.png')} contentFit='contain'/>
                <FontAwesome name="gear" size={24} color={colors.primary} style={styles.icon}/>
            </View>
            <View>
                <Image />
                <View>
                    <Text style={styles.h1}>Nome do usuário</Text>
                    <Text>{}</Text>
                    <Text style={styles.h1}>Idade:<Text>{}y</Text></Text>
                    <Text style={styles.h1}>Cidade:<Text>{}</Text></Text>
                </View>
            </View>
            <View>
                <Text>Cursos desejados:<Text>{}</Text></Text>
                <View style={styles.nextVest}>
                    <Text style={styles.h1}>Próximo vestibular</Text>
                    <View style={styles.hr}></View>
                    <Text>a{}</Text>
                </View>
                <View>
                    <Image />
                    <View>
                        <Text style={styles.h2}>Universidade:<Text>{}</Text></Text>
                        <Text style={styles.h2}>Curso desejado:<Text>{}</Text></Text>
                        <Text style={styles.h2}>Site:<Text>{}</Text></Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.h1}>Vestibulares selecionados</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        padding: '5%'
    },
    header: {
        color: '#82BFAB',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: top,
        paddingBottom: '5%',
        minHeight: '25%',
    },
    hr: {
        borderBottomColor: colors.primary,
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: 'auto',
        minWidth: '30%',
        alignSelf: 'stretch'
    },
    h1: {
        color: colors.headerText,
        fontSize: 16,
        fontWeight: 'bold',
    },
    h2: {
        color: colors.headerText,
        fontSize: 10,
        fontWeight: 'bold',
    },
    imgsize: {
        width: '15%',
    },
    icon: {
        alignSelf: 'center',
    },
    nextVest: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'stretch',
    }
});

export default Profile;