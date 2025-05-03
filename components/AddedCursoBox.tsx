import { StyleSheet, View, Text, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props {
    curso: string,
    remove: (curso: string) => void;
}

const AddedCursoBox = ({curso, remove}: Props) => {
    return(
        <View>
            <View style={{flexDirection: 'row', padding: 5}}>

                <View style={{flex:1}}>
                    <Text>{curso}</Text>
                </View>

                <View style={{alignSelf: 'flex-end'}}>
                    <Pressable onPress={() => remove(curso)}>
                        <MaterialIcons name="delete-forever" size={24} color="black" />
                    </Pressable>
                </View>
            
            </View>
        </View>

    );
};

export default AddedCursoBox;