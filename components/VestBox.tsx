import { StyleSheet, View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Vest } from '@/contexts/VestContext';
import { colors } from '@/styles/color';
import { Image } from 'expo-image';

interface Props {
    vest: Vest,
};

const VestBox = ({vest}: Props) => {
    return(
        <View style={styles.main}>
            {
            vest.pfp ? 
                <Image source={vest.pfp} style={{width: 30, height: 30, borderRadius: 10 }}/> :
                <FontAwesome name="university" size={24} color="black" />
            }
            
            <Text numberOfLines={2}>{vest.uni}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        width: 150,
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        textAlign: 'justify',
    },
});

export default VestBox;