import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

/*
    Modal ok no android -> necessita teste no ios
*/

const ConfigModal = () => {
    const isPresented = router.canGoBack();

    return(
        <View style={style.main}>

            <View style={style.top} />

            <View style={style.mid}>

                <View style={style.midT} />
                <View style={style.midM}>
                    {isPresented && <Link href={'../'} style={style.return}>Return</Link>}
                    <Text>HELLO WORLD</Text>
                    <Text>THIS IS A TEST</Text>
                </View>
                <View style={style.midB} />

            </View>

            <View style={style.bottom} />

        </View>
    );
};

// https://www.yogalayout.dev/playground
// https://reactnative.dev/docs/layout-props

const style = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },


    top: {
        flex: 1,
    },
    mid: {
        flex: 8,
        flexDirection: 'row'
    },
    bottom: {
        flex: 1,
    },


    midT: {
        flex: .5,
    },
    midM: {
        flex: 9,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    midB: {
        flex: .5,
    },


    return: {
        fontSize: 30,
    },
});

export default ConfigModal;