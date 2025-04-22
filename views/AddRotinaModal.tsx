import { Link, router } from "expo-router";
import { StyleSheet, View, Text } from 'react-native';
import { colors } from "@/styles/color";
import Ionicons from '@expo/vector-icons/Ionicons';

const materias = ['Linguagens e Literatura', 'História', 'Geografia', 'Filosofia', 'Sociologia', 'Química', 'Física', 'Biologia'];

const AddRotinaModal = () => {
    const isPresented = router.canGoBack();

    return(
        <View style={style.main}>

            <View style={style.top} />
            <View style={style.mid}>
                <View style={style.midL} />
                <View style={style.midM}>

                    <View style={style.content}>
                        <View style={style.header}>
                            <View></View>
                            <Text style={style.headerTxt}>ADICIONAR TAREFAS</Text>
                            {isPresented && <Link href={'../'}><Ionicons name="close" size={24} color={colors.primary} /></Link>}
                        </View>
                        <View>

                        </View>

                    </View>
                    
                </View>
                <View style={style.midR} />
            </View>
            <View style={style.bottom} />

        </View>
    );
};

const style = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },


    top: {
        flex: 1,
        backgroundColor: colors.modalBackground,
    },
    mid: {
        flex: 9,
        flexDirection: 'row',
        backgroundColor: colors.modalBackground,
    },
    bottom: {
        flex: 1,
        backgroundColor: colors.modalBackground,
    },


    midL: {
        flex: .5,
    },
    midM: {
        flex: 9,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    midR: {
        flex: .5,
    },


    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AddRotinaModal;