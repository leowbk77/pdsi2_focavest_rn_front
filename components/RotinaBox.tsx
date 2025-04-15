import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/styles/color";
import { PropsWithChildren, useState } from "react";
import Checkbox from "expo-checkbox";
import { Image } from "expo-image";

type Props = PropsWithChildren<{
    materia?: string;
    submateria?: string;
    icon?: string;
}>;

const RotinaBox = ({materia, submateria, icon}: Props) => {
    const mat = 'math';
    const [isChecked, setChecked] = useState(false);
    const [boxId, setBoxId] = useState(0);

    return (
        <View style={styles.main}>
            <View style={styles.leftView}></View>
            <View style={styles.rightView}>

                <View style={styles.rightInnerL}>
                    <View style={styles.innerLTop}></View>
                    <View style={styles.innerLMid}>"
                        <View style={{flex: .3}}>
                            <Image source={require(`@/assets/images/${mat}-icon.png`)} style={{width:'100%', height: '100%'}} contentFit="contain"/>
                        </View>
                        <View style={{flex: 1}}>
                            <Text>Materia 1</Text>
                            <Text>Materia 2</Text>
                        </View>
                    </View>
                    <View style={styles.innerLBottom}>
                        <Text>Estudo total: </Text>
                    </View>
                </View>

                <View style={styles.rightInnerR}>
                    <Checkbox value={isChecked} onValueChange={setChecked}/>
                    <View>
                        <Text>Editar rotina</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        padding: '2%',
        boxShadow: '1 1 3 3 ' + colors.placeholderText,
        marginBottom: 10,
        height: 120,
    },
    leftView: {
        borderRightWidth: 5,
        borderColor: colors.primary,
    },
    rightView: {
        flex: 1,
        flexDirection: 'row',
    },

    rightInnerL: {
        flex: 1,
        paddingLeft: 5,
    },
    rightInnerR: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    innerLTop: {
        backgroundColor: 'yellow',
        borderTopWidth: 5,
        borderColor: colors.primary,
    },
    innerLMid: {
        flex: 1,
        flexDirection: 'row',
    },
    innerLBottom: {
    },

});

export default RotinaBox;