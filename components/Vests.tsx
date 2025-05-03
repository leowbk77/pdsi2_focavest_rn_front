import { colors } from "@/styles/color";
import { StyleSheet, View, Text, Pressable, FlatList, Modal, ScrollView, TextInput } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import VestBox from "./VestBox";
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import { useTaskInfo } from "@/contexts/TaskContext";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useVest } from '@/contexts/VestContext';
import {Picker} from '@react-native-picker/picker';

const Vests = () => {
    const {vests, allVests, addVest, fetchUserVests} = useVest();
    const {today} = useTaskInfo();
    const [modalVisible, setModal] = useState(false);

    const [selectedVest, setSelectedVest] = useState('');

    const addVestToUser = (vestId: string) => {
        addVest(vestId);
        fetchUserVests();
        setModal(!modalVisible);
    };
    /*
    const [date, setDate] = useState(today);
    const [uni, setUni] = useState('');
    const [curso, setCurso] = useState('');
    const [site, setSite] = useState('');
    */

    return(
        <>
            <Modal 
            transparent
            visible={modalVisible}
            onRequestClose={() => {setModal(!modalVisible)}}>

                <View style={styles.modalMain}>
                    <View style={styles.modalMainT} />
                    <View style={styles.modalMainM}>

                        <View style={styles.modalHeader}>
                            <View>
                                <Pressable onPress={() => {setModal(!modalVisible)}}>
                                    <Ionicons name="return-up-back" size={24} color={colors.primary} />
                                </Pressable>
                            </View>
                            <View>
                                <Text style={styles.modalHeaderTxt}>ADICIONAR VEST</Text>
                            </View>
                            <View />
                            <View />
                        </View>

                        <View>
                            <Picker
                            selectedValue={selectedVest}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedVest(itemValue)
                            }>
                                {
                                    allVests.map((vest, i) => <Picker.Item key={i} label={vest.uni} value={vest.id} />)
                                }
                                
                            </Picker>
                        </View>
                        
                        <View style={{height: 50, paddingHorizontal: 30, justifyContent: 'center'}}>
                            <Pressable style={styles.addVestBtn} android_ripple={{radius: 5}} onPress={() => addVestToUser(selectedVest)}>
                                <MaterialIcons name="library-add" size={24} color="white" />
                                <Text style={{color: 'white'}}>Adicionar Vestibular</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.modalMainB} />
                </View>

            </Modal>
            
            <View style={styles.main}>

                <View style={{flex: 9, padding: 10, paddingBottom: 0}}>
                    <FlatList
                        data={vests}
                        renderItem={({item}) => <VestBox key={item.id} vest={item} />}
                        keyExtractor={item => item.id}
                        numColumns={vests.length > 0 ? Math.ceil((vests.length - 1) / 3) : 2}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 10}}
                    />
                </View>

                <View style={{height: 50, paddingHorizontal: 30, justifyContent: 'center'}}>
                    <Pressable style={styles.addVestBtn} android_ripple={{radius: 5}} onPress={() => setModal(true)}>
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
    modalMain: {
        flex: 1,
    },
    modalMainT: {
        flex: 1
    },
    modalMainM: {
        flex: 1,
        backgroundColor: colors.viewWBackground,
        marginHorizontal: 10,
        boxShadow: colors.boxShadowModal
    },
    modalMainB: {
        flex: 1
    },
    topicInput:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.borderLgrey,
        height: 40,
    },
    
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 18,
    },
    modalHeaderTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalTxtInputLabel: {
        fontWeight: 'bold',
    },

});

export default Vests;


// <ScrollView showsVerticalScrollIndicator={false}>
// <View style={{paddingHorizontal: 10}}>

//     <View style={{flexDirection: 'row', paddingVertical: 10}}>
//         <View style={{flex:1}} />
//         <View style={{flex:1, height: 100, alignItems: 'center', justifyContent: 'center'}}>
//             <FontAwesome name="university" size={50} color="black" />
//         </View>
//         <View style={{flex:1}} />
//     </View>

//     <View>
//         <Text style={styles.modalTxtInputLabel}>Data</Text>
//         <DatePicker style={{alignSelf: 'center'}} date={today} onDateChange={(date) => setDate(date)} mode="date" theme="light" dividerColor={colors.primary}/>
//     </View>
//     <View>
//         <Text style={styles.modalTxtInputLabel}>Universidade</Text>
//         <TextInput style={styles.topicInput} value={uni} onChangeText={text => setUni(text)} cursorColor={colors.primary}/>
//     </View>
//     <View>
//         <Text style={styles.modalTxtInputLabel}>Curso</Text>
//         <TextInput style={styles.topicInput} value={curso} onChangeText={text => setCurso(text)}  cursorColor={colors.primary}/>
//     </View>
//     <View>
//         <Text style={styles.modalTxtInputLabel}>Site</Text>
//         <TextInput style={styles.topicInput} value={site} onChangeText={text => setSite(text)}  cursorColor={colors.primary}/>
//     </View>
    
// </View>

// </ScrollView>