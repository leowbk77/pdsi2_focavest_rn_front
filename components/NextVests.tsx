import {View, StyleSheet, FlatList} from 'react-native';
import NextVestBox from './NextVestBox';
import { useVest } from "@/contexts/VestContext";

const NextVests = () => {
    const {vests} = useVest(); // criar uma funcao que retorna os 5 proximos vests ou puxar do back

    return(
        <View style={styles.main}>
            <FlatList
            horizontal
            data={vests}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NextVestBox vest={item} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    listContainer: {
        paddingVertical: 8,
    },
});

export default NextVests;