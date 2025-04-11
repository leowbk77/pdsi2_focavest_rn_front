import { StyleSheet, View, Text, TextInput, InputModeOptions, KeyboardTypeOptions } from "react-native";
import { colors } from "@/styles/color";

interface Props {
    bkgColor: string,
    isSecure?: boolean,
    title: string,
    placeholder?: string,
    inputmode?: InputModeOptions | undefined,
    keyboardtype?: KeyboardTypeOptions,
    onChangeText?: (txt: string) => void;
};

const InputBox = ({bkgColor, isSecure, title, placeholder, inputmode, onChangeText, keyboardtype}: Props) => {
    return(
        <View style={styles.main}>
            <Text style={[styles.txt, {backgroundColor: bkgColor}]}>{title}</Text>
            <TextInput 
                style={styles.txtInput} 
                placeholder={placeholder} 
                inputMode={inputmode}
                secureTextEntry={isSecure} 
                placeholderTextColor={colors.placeholderText}
                onChangeText={onChangeText}
                keyboardType={keyboardtype}/>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    txtInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.placeholderText,
        marginTop: 15,
    },
    txt: {
        color: colors.placeholderText,
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 10,
        padding: 5,
        backgroundColor: 'white',
    },
});

export default InputBox;