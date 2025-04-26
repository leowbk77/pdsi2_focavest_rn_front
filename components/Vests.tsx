import { colors } from "@/styles/color";
import { StyleSheet, View, Text, Pressable, FlatList, Modal } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const data = [{
    "id": "3",
    "data": "05/06/2025",
    "pfp": "https://www5.usp.br/wp-content/themes/usp/images/logo-usp.png",
    "uni": "Universidade de São Paulo",
    "curso": "Ciência da Computação",
    "site": "fuvest.br/"
  }];

const Vests = () => {
    return(
        <>
            <Modal 
                transparent
                visible={false}
            >
                <Text>Hello</Text>
            </Modal>
            <View style={styles.main}>

                <View style={{flex: 9}}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => <Text>{item.uni}</Text>}
                        keyExtractor={item => item.id}
                    />
                </View>

                <View style={{height: 50, paddingHorizontal: 30}}>
                    <Pressable style={styles.addVestBtn} android_ripple={{radius: 5}}>
                        <MaterialIcons name="library-add" size={24} color="white" />
                        <Text style={{color: 'white'}}>Adicionar Vestibular</Text>
                    </Pressable>
                </View>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    addVestBtn: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Vests;