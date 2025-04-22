import {View, StyleSheet, Text} from 'react-native';
import { Task } from '@/contexts/TaskContext';
import { colors } from '@/styles/color';

interface Props {
    activity: Task,
}

const DailyActivityBox = ({activity}: Props) => {
    return(
        <View style={styles.main}>
            <Text style={styles.innerTxt}>{activity.topico}</Text>
            <Text style={styles.innerTxt}>{activity.tempototal} hrs</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height: 100,
        width: 100,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 5,
    },
    innerTxt: {
        fontSize: 10,
        color: colors.text,
    }
});

export default DailyActivityBox;