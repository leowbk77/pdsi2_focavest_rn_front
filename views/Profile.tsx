import {StyleSheet, Text, View,} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
import { colors } from '@/styles/color';

import { useUserInfo } from '@/contexts/userInfoContext';
import { useEffect } from 'react';


import {Platform, StatusBar } from 'react-native';
const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const Profile = () => {

    const {userName, userImage, userCursos, userAge, userCity, fetchUserData} = useUserInfo();

    useEffect(() => {
        fetchUserData('Lucas'); // temporario
    }, []);

    return (
        <View style={styles.mainView}>

            <View style={styles.header}>
                <Image style={styles.imgsize} source={require('@/assets/images/FocaVestPLogo.png')} contentFit='contain'/>
                <FontAwesome name="gear" size={24} color={colors.primary} style={styles.icon}/>
            </View>

            <View style={styles.userInfoView}>
                <Image source="https://cataas.com/cat" style={styles.imgPfp}/>
                <View style={styles.userInfoTextView}>
                    <Text style={styles.h1}>Nome do usuário</Text>
                    <Text style={styles.txt}>{userName}</Text>
                    <Text style={styles.h1}>Idade: <Text style={styles.txt}>{userAge}</Text> y</Text>
                    <Text style={styles.h1}>Cidade: <Text style={styles.txt}>{userCity}</Text> </Text>
                </View>
            </View>

            <View style={styles.vestView}>
                <Text style={styles.h1}>Cursos desejados: <Text style={styles.txt}>{userCursos}</Text></Text>
                <View style={styles.nextVestHeader}>
                    <Text style={styles.h1}>Próximo vestibular</Text>
                    <View style={styles.hr}></View>
                    <Text style={styles.txt}>31/03/2025{}</Text>
                </View>

                <View style={styles.nextVest}>
                    <Image source="https://feciv.ufu.br/sites/feciv.ufu.br/files/ufu.png" style={styles.imgPfp}/>
                    <View style={styles.nextVestInfoView}>
                        <Text style={styles.h2}>Universidade: <Text style={styles.txt}>Universidade Federal de Uberlandia{}</Text></Text>
                        <Text style={styles.h2}>Curso desejado: <Text style={styles.txt}>BSI{}</Text></Text>
                        <Text style={styles.h2}>Site: <Text style={styles.txt}>ufu.br/{}</Text></Text>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: top,
        paddingBottom: '5%',
        minHeight: '25%',
    },
    userInfoView: {
        flexDirection: 'row',
    },
    userInfoTextView: {
        marginLeft: '5%',
    },
    vestView: {
        marginTop: '5%',
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
    txt: {
        color: colors.text,
        fontWeight: 'normal',
    },
    imgsize: {
        width: '15%',
    },
    imgPfp: {
        width: 100, 
        height: 100, 
        borderRadius: 10,
    },
    icon: {
        alignSelf: 'center',
    },
    nextVestHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'stretch',
        marginTop: '5%',
    },
    nextVest: {
        flexDirection: 'row',
        padding: '5%',
    },
    nextVestInfoView: {
        marginLeft: '5%',
    }
});

export default Profile;