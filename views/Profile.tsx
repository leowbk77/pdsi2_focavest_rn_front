import { useEffect } from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '@/styles/color';
import { useAuth } from '@/contexts/AutenticacaoContext';
import Header from '@/components/Header';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Platform, StatusBar } from 'react-native';
import { router } from 'expo-router';
import Vests from '@/components/Vests';
import { useVest } from '@/contexts/VestContext';

const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const Profile = () => {

    const {
        userInfo,
        logoutJson, isAuthenticated,
    } = useAuth();

    const {nextVest} = useVest();

    useEffect(() => {
        if(!isAuthenticated) {
          console.log('Autenticado: ',isAuthenticated);
          console.log('============================================================');
          router.replace('/');
        }
      }, [isAuthenticated]);

    return (
        <View style={styles.mainView}>

            <Header top={top} iconhref='/config'>
                <FontAwesome name="gear" size={24} color={colors.primary} style={styles.icon}/>
            </Header>

            <View style={styles.userInfoView}>
                <Image source="https://cataas.com/cat" style={styles.imgPfp}/>
                <View style={styles.userInfoTextView}>
                    <Text style={styles.h1}>Nome do usuário</Text>
                    <Text style={styles.txt}>{userInfo.user.nome}</Text>
                    <Text style={styles.h1}>Idade: <Text style={styles.txt}>{userInfo.user.idade}</Text> y</Text>
                    <Text style={styles.h1}>Cidade: <Text style={styles.txt}>{userInfo.user.cidade}</Text> </Text>
                </View>
            </View>

            <View style={styles.vestView}>
                <Text style={styles.h1}>Cursos desejados: <Text style={styles.txt}>{userInfo.user.cursos.join(", ")}</Text></Text>
                <View style={styles.nextVestHeader}>
                    <Text style={styles.h1}>Próximo vestibular</Text>
                    <View style={styles.hr}></View>
                    <Text style={styles.txt}>{nextVest.data}</Text>
                </View>

                <View style={styles.nextVest}>

                    {
                    nextVest.pfp ? 
                        <Image source={nextVest.pfp} style={styles.imgPfpSm}/> :
                        <FontAwesome name="university" size={50} color="black" />
                    }
                    
                    <View style={styles.nextVestInfoView}>
                        <Text style={styles.h2}>Universidade: <Text style={styles.txt}>{nextVest.uni}</Text></Text>
                        <Text style={styles.h2}>Curso desejado: <Text style={styles.txt}>{nextVest.curso}</Text></Text>
                        {
                        nextVest.site ?
                            <Text style={styles.h2}>Site: <Text style={styles.txt}>{nextVest.site}</Text></Text> :
                            <View />
                        }
                    </View>
                </View>
            </View>

            <View style={styles.vestsView}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.h1}>Vestibulares</Text>
                    <View style={styles.hr2}/>
                </View>
                
                <Vests/>
                
            </View>

            <View style={styles.logoutView}>
                <Pressable style={{flexDirection: 'row'}} onPress={logoutJson}>
                    <MaterialIcons name="logout" size={24} color={colors.primary} />
                    <Text>Sair</Text>
                </Pressable>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: top,
        paddingBottom: '5%',
        minHeight: '10%',
        maxHeight: '12%',
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
    hr2: {
        flex: 1,
        borderBottomColor: colors.primary,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 10,
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
    imgPfpSm: {
        width: 50, 
        height: 50, 
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
    },
    vestsView: {
        flex: 1,
        borderBottomWidth: 1,
    },
    logoutView: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: 15,
    },
});

export default Profile;