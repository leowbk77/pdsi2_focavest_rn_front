import { Modal, StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "@/styles/color";
import { PropsWithChildren, useState } from "react";
import Checkbox from "expo-checkbox";
import { Image } from "expo-image";
import icons from "./LectureIcons";
import { Task } from "@/contexts/TaskContext";

type Props = PropsWithChildren<{
    icon?: string;
    task: Task;
}>;

const RotinaBox = ({icon, task}: Props) => {
    const [isChecked, setChecked] = useState(false);
    const [boxId, setBoxId] = useState(task.id);
    const [modalVisible, setModal] = useState(false);

    const butao = () => {
        setChecked(!isChecked);
        console.log(isChecked, boxId);
    };

    return (
    <>
        <Modal 
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModal(!setModal);}}>
            <View style={styles.modalMain}>
                <View style={styles.modalMainTop}></View>
                <View style={styles.modalMainMid}></View>
                <View style={styles.modalMainBottom}></View>
            </View>
        </Modal>

        <View style={styles.main}>
            <View style={styles.leftView}></View>

            <View style={styles.midView}>

                <View style={styles.midTopView}></View>

                <View style={styles.midCenterView}>

                    <View style={styles.centerIcon}>
                        <Image source={icon ? icons[icon] : icons["default"]} style={{width:'100%', height: '100%'}} contentFit="contain"/>
                    </View>

                    <View style={styles.centerInfo}>
                        <Text style={styles.txtDecorated}>{task.materia}</Text>
                        <Text>{task.topico}</Text>
                    </View>

                </View>

                <View style={styles.midBottomView}>
                    <Text style={styles.txtDecorated}>Estudo total: </Text><Text>{task.tempototal}</Text>
                </View>

            </View>

            <View style={styles.rightView}>

                <Checkbox color={colors.primary} value={isChecked} onValueChange={butao}/>
                <View style={{}}>
                    <Pressable
                    onPress={() => {setModal(true)}}>
                        <Text style={styles.txtDecoratedBtn}>Editar rotina</Text>
                    </Pressable>
                    
                </View>

            </View>
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: colors.viewWBackground,
        elevation: 2, // sombra no Android
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 12,
        padding: 5,
        height: 100,
    },

    leftView: {
        borderLeftWidth: 5,
        borderColor: colors.primary,
    },
    midView: {
        flex: 1,
        paddingLeft: 5,
    },
    rightView: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    midTopView: {
        borderColor: colors.primary,
        borderBottomWidth: 2,
    },
    midCenterView: {
        flex: 1,
        flexDirection: 'row',

    },
    midBottomView: {
        flexDirection: 'row',
    },

    centerIcon: {
        flex: .3,
    },
    centerInfo: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    
    txtDecorated: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    txtDecoratedBtn: {
        color: colors.primary,
        textDecorationLine: 'underline',
    },

    modalMain: {
        flex: 1,
    },
    modalMainTop: {
        flex: 1,
    },
    modalMainMid: {
        flex: 8,
        backgroundColor: 'red',
    },
    modalMainBottom: {
        flex: 1,
    },
});

export default RotinaBox;