import { Link, router } from "expo-router";
import { StyleSheet, View, Text, TextInput, ScrollView, Modal } from 'react-native';
import { colors } from "@/styles/color";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import { TaskContent } from "@/contexts/TaskContext";
import AddTaskBtn from "@/components/AddTaskBtn";
import AddActivityBtn from "@/components/AddActivityBtn";
import { CalendarUtils } from "react-native-calendars";

const materias = ['Linguagens e Literatura', 'História', 'Geografia', 'Filosofia', 'Sociologia', 'Química', 'Física', 'Biologia'];

/* DATE PICKER
https://github.com/henninghall/react-native-date-picker?tab=readme-ov-file
*/

const AddRotinaModal = () => {
    const isPresented = router.canGoBack();
    const [modalVisible, setModal] = useState(false);

    const [date, setDate] = useState(new Date());
    const [topic, setTopic] = useState('');
    const [tasks, setTasks] = useState<TaskContent[]>([]);


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const temp = (newDate: Date) => {
        //setDate(newDate);
        console.log(newDate.getFullYear() + '-' + newDate.getMonth() + '-' + newDate.getDate() + ' ' + newDate.getHours() + ':' + newDate.getMinutes() + ':00');
        //console.log(CalendarUtils.getCalendarDateString(newDate));
    };

    return(
        <>
            <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModal(!modalVisible)}}>
                <View style={styles.modalMain}>
                    <View style={styles.modalMainTop}></View>
                    <View style={styles.modalMainMid}>

                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View style={styles.modalHeader}>
                                <Text style={styles.modalHeaderTxt}>ADICIONAR ATIVIDADE</Text>
                            </View>
                            

                            <View style={styles.modalStartEndView}>

                                <View style={{flex: 1}}>
                                    <Text>Inicio</Text>
                                    <DatePicker style={{alignSelf: 'center'}} date={startDate} onDateChange={temp} mode="time" theme="light" dividerColor={colors.primary}/>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text>Fim</Text>
                                    <DatePicker style={{alignSelf: 'center'}} date={endDate} onDateChange={temp} mode="time" theme="light" dividerColor={colors.primary}/>
                                </View>

                            </View>
                            

                        </ScrollView>
                    </View>
                    <View style={styles.modalMainBottom}></View>
                </View>
            </Modal>

            <View style={styles.main}>

                <View style={styles.top} />
                <View style={styles.mid}>
                    <View style={styles.midL} />
                    <ScrollView style={styles.midM} showsVerticalScrollIndicator={false}>

                        <View style={styles.content}>
                            <View style={styles.header}>
                                <View></View>
                                <Text style={styles.headerTxt}>ADICIONAR TAREFAS</Text>
                                {isPresented && <Link href={'../'}><Ionicons name="close" size={24} color={colors.primary} /></Link>}
                            </View>
                            <View style={styles.inputsView}>

                                <View>
                                    <Text style={styles.h2}>Categoria</Text>
                                    <TextInput placeholder="temporario" style={styles.topicInput} value={topic} onChangeText={setTopic}/>
                                </View>
                                

                                <View>
                                    <Text style={styles.h2}>Tópico</Text>
                                    <TextInput style={styles.topicInput} value={topic} onChangeText={setTopic}/>
                                </View>

                                <View style={styles.datePickerView}>
                                    <Text style={styles.h2}>Data</Text>
                                    <DatePicker date={date} onDateChange={setDate} mode="date" theme="light" dividerColor={colors.primary}/>
                                </View>
                                
                                <View style={styles.newTasksView}>
                                    <View style={styles.addActivityBtn}>
                                        <AddActivityBtn onPress={() => {setModal(!modalVisible)}}/>
                                    </View>
                                    {tasks.length > 0 ? <></> : <Text style={styles.noActivityTxt}>Nenhuma atividade adicionada</Text>}
                                </View>

                                <View style={styles.addTaskBtn}>
                                    <AddTaskBtn />
                                </View>
                                
                            </View>
                        </View>
                        
                    </ScrollView>
                    <View style={styles.midR} />
                </View>
                <View style={styles.bottom} />

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },


    top: {
        flex: 1,
        backgroundColor: colors.modalBackground,
    },
    mid: {
        flex: 9,
        flexDirection: 'row',
        backgroundColor: colors.modalBackground,
    },
    bottom: {
        flex: 1,
        backgroundColor: colors.modalBackground,
    },


    midL: {
        flex: 1,
    },
    midM: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    midR: {
        flex: 1,
    },


    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    inputsView: {
        flex: 1,
        padding: 10,
    },
    datePickerView: {
        borderWidth: 0,
    },
    h2: {
        fontWeight: 'bold',
    },

    topicInput:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.borderLgrey,
        height: 40,
    },
    newTasksView: {
        borderWidth: 1, //temp
        borderRadius: 5,
        borderColor: colors.borderLgrey,
    },

    addActivityBtn: {
        padding: 5,
        alignItems: 'flex-end',
    },
    addTaskBtn: {
        marginTop: 10,
    },

    noActivityTxt: {
        textAlign: 'center',
        paddingVertical: 10,
    },

    modalMain: {
        flex: 1,

    },
    modalMainTop: {
        flex: 1,
    },
    modalMainMid: {
        flex: 8,
        backgroundColor: colors.viewWBackground,
        marginHorizontal: '1%',
        borderRadius: 5,
        boxShadow: '1 1 5 1 black',
    },
    modalMainBottom: {
        flex: 1,
    },

    modalHeader: {
        marginVertical: 18,
    },
    modalHeaderTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalStartEndView: {
        flexDirection: 'row'
    }
});

export default AddRotinaModal;