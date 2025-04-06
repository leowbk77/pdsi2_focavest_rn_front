import MainButton from "@/components/MainButton";
import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import {Platform, StatusBar } from 'react-native';
const top = Platform.OS === 'android' ? StatusBar.currentHeight : 0;


const ConfigScreen = () => {
    const isPresented = router.canGoBack();

    return(
        <View style={style.main}>
            <Text>Hello</Text>
            <Text>This is a modal screen</Text>

            {isPresented && <Link href={'../'} style={style.return}>Return</Link>}

        </View>
    );
};

const style = StyleSheet.create({
    main: {
        paddingTop: top,
        padding: '5%',
        backgroundColor: 'white',
        height: '90%',
        width: '90%',
        alignSelf: 'center',
    },
    return: {
        fontSize: 30,
    },
});

export default ConfigScreen;