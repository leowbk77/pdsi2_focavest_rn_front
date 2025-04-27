import { Link, router } from "expo-router";
import { StyleSheet, View, Text, TextInput, ScrollView, Modal, Pressable } from 'react-native';
import { colors, blockColors } from "@/styles/color";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";
import DatePicker from "react-native-date-picker";
import { Task, TaskContent, useTaskInfo } from "@/contexts/TaskContext";
import AddTaskBtn from "@/components/AddTaskBtn";
import AddActivityBtn from "@/components/AddActivityBtn";
import { CalendarUtils } from "react-native-calendars";
import {Picker} from '@react-native-picker/picker';
import MainButton from "@/components/MainButton";
import AddedActivityBox from "@/components/AddedActivityBox";

/* DATE PICKER
https://github.com/henninghall/react-native-date-picker?tab=readme-ov-file
// SELECT
https://github.com/react-native-picker/picker?tab=readme-ov-file
*/

const AddRotinaModal = () => {
    //modal
    const [modalVisible, setModal] = useState(false);
    //TaskContext
    const {today, materias, addTask} = useTaskInfo();
    // Task
    const [date, setDate] = useState(today);
    const [selectedMateria, setSelectedMateria] = useState(materias[0]);
    const [topic, setTopic] = useState('');
    const [newTasks, setTasks] = useState<TaskContent[]>([]);
    // TaskContent (Activity)
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [title, setTaskTitle] = useState('');
    const [summary, setTaskSummary] = useState('');
    const [selectedColor, setSelectedColor] = useState(blockColors[0].hex);

    /** 
     * Seta as datas para o formato 'yyyy-mm-dd hh:mm:ss'
     */
    const formatDateToTaskContent = (date: Date) => {
        const pad = (n: number) => n.toString().padStart(2, '0');
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:00`;    
    };

    /*
    * Adiciona a task
    */
    const confirmAddTask = () => {
        const newTask: Task = {
            id: '',
            materia: selectedMateria,
            topico: topic,
            data: formatDateToTaskContent(date),
            tasks: newTasks,
        };
        addTask(newTask);
    };

    /*
    * Adiciona a atividade
    */
    const addActivity = () => {
        const id = Date.now().toString(); // Gera ID único baseado no timestamp atual -> obrigado GPT
        const newActivity: TaskContent = {
            id: id,
            start: startDate,
            end: endDate,
            title: title,
            summary: summary,
            color: selectedColor,
        };

        if(startDate === "") {
            const start = formatDateToTaskContent(today);
            newActivity.start = start;
        }
        if(endDate === "") {
            const end = formatDateToTaskContent(today);
            newActivity.end = end;
        }
        
        setTasks(prev => [...prev, newActivity]);
        setStartDate("");
        setEndDate("");
    };

    /*
    *  Remove a atividade
    */
    const removeActivity = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    /**
     * Validacoes dos "formularios"
     */
    const validateTaskAdd = (): boolean => {
        return topic.length > 3 ? false : true;
    };
    const validateActivityAdd = (): boolean => {
        return title.length > 3 ? false : true;
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
                                <View>
                                    <Pressable onPress={() => {setModal(!modalVisible)}}>
                                        <Ionicons name="return-up-back" size={24} color={colors.primary} />
                                    </Pressable>
                                </View>
                                <View>
                                    <Text style={styles.modalHeaderTxt}>ADICIONAR ATIVIDADE</Text>
                                </View>
                                <View />
                                <View />
                            </View>
                            

                            <View style={styles.modalStartEndView}>

                                <View style={{flex: 1}}>
                                    <Text style={styles.modalStartEndTxt}>Inicio</Text>
                                    <DatePicker style={{alignSelf: 'center'}} date={today} onDateChange={(date) => setStartDate(formatDateToTaskContent(date))} mode="time" theme="light" dividerColor={colors.primary}/>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={styles.modalStartEndTxt}>Fim</Text>
                                    <DatePicker style={{alignSelf: 'center'}} date={today} onDateChange={(date) => setEndDate(formatDateToTaskContent(date))} mode="time" theme="light" dividerColor={colors.primary}/>
                                </View>

                            </View>
                            
                            <View style={styles.modalTxtInputsView}>
                                <View>
                                    <Text style={styles.modalTxtInputLabel}>Título</Text>
                                    <TextInput style={styles.topicInput} value={title} onChangeText={setTaskTitle}/>
                                </View>
                                <View>
                                    <Text style={styles.modalTxtInputLabel}>Descrição</Text>
                                    <TextInput style={styles.topicInput} value={summary} onChangeText={setTaskSummary}/>
                                </View>
                                <View>
                                    <Text style={styles.modalTxtInputLabel}>Cor</Text>
                                    <Picker
                                    selectedValue={selectedColor}
                                    onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}>
                                        {blockColors.map((color, i) => <Picker.Item key={i} style={{backgroundColor: color.hex, }} label={color.cor} value={color.hex}/>)}
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.modalAddActivityBtn}>
                                <MainButton title='Adicionar' disable={validateActivityAdd()} onPress={addActivity} size={50}/>
                            </View>

                        </ScrollView>
                    </View>
                    <View style={styles.modalMainBottom}></View>
                </View>
            </Modal>

            <View style={styles.main}>

                <View style={styles.top} />
                <View style={styles.mid}>

                    <View style={styles.header}>
                        <View />
                        <View />
                        <View>
                            <Text style={styles.headerTxt}>ADICIONAR TAREFAS</Text>
                        </View>
                        <View>
                            <Link href={'../'}>
                                <Ionicons name="close" size={24} color={colors.primary} />
                            </Link>
                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{}} showsVerticalScrollIndicator={false}>

                        <View style={styles.content}>
                            <View style={styles.inputsView}>

                                <View>
                                    <Text style={styles.h2}>Categoria</Text>
                                    <Picker
                                    selectedValue={selectedMateria}
                                    onValueChange={(itemValue, itemIndex) => setSelectedMateria(itemValue)}>
                                        {materias.map((materia, i) => <Picker.Item key={i} label={materia} value={materia}/>)}
                                    </Picker>
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
                                    {
                                    newTasks.length > 0 ?
                                        newTasks.map((task, i) => <AddedActivityBox key={i} atividade={task} id={task.id} remove={removeActivity}/>) 
                                        : 
                                        <Text style={styles.noActivityTxt}>Nenhuma atividade adicionada</Text>
                                    }
                                </View>

                                
                            </View>
                        </View>
                        
                    </ScrollView>

                    <View style={styles.addTaskBtn}>
                        <MainButton title='Adicionar tarefa' disable={validateTaskAdd()} onPress={confirmAddTask} size={50}/>
                    </View>

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
        backgroundColor: colors.viewWBackground,
    },
    bottom: {
        flex: 1,
        backgroundColor: colors.modalBackground,
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
        paddingHorizontal: 5,
    },

    addActivityBtn: {
        padding: 5,
        alignItems: 'flex-end',
    },
    addTaskBtn: {
        paddingVertical: 5,
        paddingHorizontal: 10,
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 18,
    },
    modalHeaderTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalStartEndView: {
        flexDirection: 'row'
    },
    modalStartEndTxt: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalTxtInputLabel: {
        fontWeight: 'bold',
    },
    modalTxtInputsView: {
        paddingHorizontal: 5,
    },
    modalAddActivityBtn: {
        paddingHorizontal: 50,
        marginTop: 10,
    },
});

export default AddRotinaModal;