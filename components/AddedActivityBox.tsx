import { TaskContent } from "@/contexts/TaskContext";
import { StyleSheet, View, Text } from "react-native";

interface Props {
    atividade: TaskContent,
    id: number,
}

const AddedActivityBox = ({atividade, id}: Props) => {
    return(
        <View style={[styles.main, {backgroundColor: atividade.color}]}>
            <Text>{atividade.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 5,
    }
});

export default AddedActivityBox;