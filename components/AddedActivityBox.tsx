import { TaskContent } from "@/contexts/TaskContext";
import { StyleSheet, View, Text, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props {
    atividade: TaskContent,
    id: string,
    remove: (id: string) => void | null | undefined,
}

const AddedActivityBox = ({atividade, id, remove}: Props) => {
    return(
        <View style={[styles.main, {backgroundColor: atividade.color}]}>
            <View style={styles.activityInfoView}>
                <Text numberOfLines={1}>{atividade.title}</Text>
                <Text numberOfLines={1}>{atividade.start}</Text>
            </View>
            <View style={styles.deleteBtnView}>
                <Pressable onPress={() => remove(id)}>
                    <MaterialIcons name="delete-forever" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 5,
        flexDirection: 'row',
    },
    activityInfoView: {
        flex: 8,
    },
    deleteBtnView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AddedActivityBox;