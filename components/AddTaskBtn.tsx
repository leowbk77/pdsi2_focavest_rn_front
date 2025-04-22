import { colors } from "@/styles/color";
import { PropsWithChildren } from "react";
import { StyleSheet, Pressable, View, Text} from "react-native";

type Props = PropsWithChildren<{
    onPress?: () => void,
}>;

const AddTaskBtn = ({onPress}: Props) => {
    return(
        <View style={styles.main}>
            <Pressable onPress={onPress}>
                <Text style={styles.text}>Adicionar tarefa</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        borderRadius: 20,
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default AddTaskBtn;