import { colors } from "@/styles/color";
import { PropsWithChildren } from "react";
import { StyleSheet, Pressable, View, Text} from "react-native";

type Props = PropsWithChildren<{
    onPress?: () => void,
}>;

const AddActivityBtn = ({onPress}: Props) => {
    return(
        <View style={styles.main}>
            <Pressable onPress={onPress}>
                <Text style={styles.text}>+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'lightgrey',
        borderRadius: '50%',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
});

export default AddActivityBtn;