import { Link, router } from "expo-router";
import { StyleSheet, View } from 'react-native';
import { colors } from "@/styles/color";

const AddRotinaModal = () => {
    const isPresented = router.canGoBack();

    return(
        <View style={style.main}>

            <View style={style.top} />

            <View style={style.mid}>

                <View style={style.midT} />
                <View style={style.midM}>
                    {isPresented && <Link href={'../'} style={style.return}>Return</Link>}
                    
                </View>
                <View style={style.midB} />

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
        flex: 8,
        flexDirection: 'row',
        backgroundColor: colors.modalBackground,
    },
    bottom: {
        flex: 1,
        backgroundColor: colors.modalBackground,
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

export default AddRotinaModal;