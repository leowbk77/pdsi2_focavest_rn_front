import {StyleSheet, Text, View,} from 'react-native';
import { Image } from 'expo-image';


import {Platform, StatusBar } from 'react-native';
const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const Profile = () => {
    return (
        <>
            <View style={styles.header}>
                <Text>FocaVest</Text>
                <Text>/#/</Text>
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
                <View>
                    <Text style={styles.h1}>Próximo vestibular</Text>
                    <View style={styles.hr}></View>
                    <Text>{}</Text>
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
                {/* criar um componente dos cards */}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        color: '#82BFAB',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: top,
    },
    hr: {
        borderBottomColor: '#82BFAB',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    h1: {
        color: '#616E7D',
        fontSize: 16,
        fontWeight: 'bold',
    },
    h2: {
        color: '#616E7D',
        fontSize: 10,
        fontWeight: 'bold',
    }
});