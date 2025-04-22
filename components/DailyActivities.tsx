import { View, StyleSheet, Text, FlatList } from "react-native";
import { colors} from "@/styles/color";
import { useTaskInfo } from "@/contexts/TaskContext";
import { useState } from "react";
import DailyActivityBox from "./DailyActivityBox";

const DailyActivities = () => {
    const {todayTasks} = useTaskInfo();
    const [dia, setDia] = useState(new Date().toLocaleDateString('pt-BR', {weekday: 'long'}));
    const [tasks, setTasks] = useState(todayTasks());

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.headerTXT}>
                    {
                        dia[0].toUpperCase() + dia.slice(1)
                    }
                </Text>
            </View>
            <View style={styles.content}>
                <FlatList 
                horizontal
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <DailyActivityBox activity={item}/>}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.primary,
        borderRadius: 10,
        padding: 10,
    },
    header: {
    },
    headerTXT: {
        color: 'white',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
    listContainer: {
        padding: 10
    },
});

export default DailyActivities;