import { Modal, StyleSheet, Text, View, Pressable, ScrollView, TextInput, } from "react-native";
import { colors } from "@/styles/color";
import { PropsWithChildren, useState } from "react";
import Checkbox from "expo-checkbox";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from "expo-image";
import { icons} from "./LectureIcons";
import { Task, TaskContent, useTaskInfo } from "@/contexts/TaskContext";
import MainButton from "./MainButton";
import DatePicker from "react-native-date-picker";
import {Picker} from '@react-native-picker/picker';
import AddActivityBtn from "@/components/AddActivityBtn";

type Props = PropsWithChildren<{
    icon?: string;
    task: Task;
}>;

const RotinaBox = ({icon, task}: Props) => {
    const [isChecked, setChecked] = useState(false);
    const [boxId, setBoxId] = useState(task.id);
    const [modalVisible, setModal] = useState(false);

    const {materias, today, tasks, addTask, removeTask} = useTaskInfo();

    // Estados para edição
    const [selectedMateria, setSelectedMateria] = useState(task.materia);
    const [topic, setTopic] = useState(task.topico);
    const [date, setDate] = useState(new Date(task.data));
    const [taskList, setTaskList] = useState<TaskContent[]>(task.tasks);

    // Modal de adicionar atividade
    const [addActivityModal, setAddActivityModal] = useState(false);

    // Funções auxiliares
    const removeActivity = (id: string) => {
        setTaskList(prev => prev.filter(task => task.id !== id));
    };

    const confirmEditTask = () => {
        const editedTask: Task = {
            id: task.id,
            materia: selectedMateria,
            topico: topic,
            data: formatDateToTaskContent(date),
            tasks: taskList,
            tempototal: taskList.length * 10, // Exemplo: cada atividade vale 10min
        };

        // Remove a antiga e adiciona a nova
        removeTask(task.id);
        addTask(editedTask);
        setModal(false);
    };

    const validateTaskEdit = () => {
        return topic.length <= 3;
    };

    const formatDateToTaskContent = (date: Date) => {
        const pad = (n: number) => n.toString().padStart(2, '0');
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    };

    const butao = () => {
        setChecked(!isChecked);
        console.log(icon, boxId);
    };

    return (
    <>
        
        <Modal 
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModal(!setModal);}}>

            <View style={styles.modalMain}>
                <View style={styles.modalMainTop}/>
                <View style={styles.modalMainMid}>

                    <View style={styles.modalHeader}>
                        <View>
                            <Pressable onPress={() => {setModal(!modalVisible)}}>
                                <Ionicons name="return-up-back" size={24} color={colors.primary} />
                            </Pressable>
                        </View>
                        <View>
                            <Text style={styles.modalHeaderTxt}>EDIÇÃO</Text>
                        </View>
                        <View />
                    </View>
                    
                    <ScrollView showsVerticalScrollIndicator={false}>
                        
                        <View style={{ paddingHorizontal: 10 }}>
                            {/* MATÉRIA */}
                            <Text style={styles.modalTxtInputLabel}>Categoria</Text>
                            <Picker
                                selectedValue={selectedMateria}
                                onValueChange={(itemValue) => setSelectedMateria(itemValue)}>
                                {materias.map((materia, i) => (
                                    <Picker.Item key={i} label={materia} value={materia} />
                                ))}
                            </Picker>

                            {/* TÓPICO */}
                            <Text style={styles.modalTxtInputLabel}>Tópico</Text>
                            <TextInput
                                style={styles.topicInput}
                                value={topic}
                                onChangeText={setTopic}
                            />

                            {/* DATA */}
                            <Text style={styles.modalTxtInputLabel}>Data</Text>
                            <DatePicker
                                date={date}
                                onDateChange={setDate}
                                mode="date"
                                theme="light"
                                dividerColor={colors.primary}
                            />

                            {/* ATIVIDADES */}
                            <Text style={[styles.modalTxtInputLabel, { marginTop: 10 }]}>Atividades</Text>
                            <View style={{borderWidth: 1, borderRadius: 5, borderColor: colors.borderLgrey}}>
                                <View style={{alignSelf: 'flex-end'}}>
                                    <AddActivityBtn onPress={() => setAddActivityModal(true)}/>
                                </View>
                                {taskList.length > 0 ? (
                                taskList.map((atividade, i) => (
                                    <View key={i} style={{ marginVertical: 5 }}>
                                        <Text>{atividade.title}</Text>
                                        <Text style={{ fontSize: 12 }}>{atividade.start} até {atividade.end}</Text>
                                        <Pressable onPress={() => removeActivity(atividade.id)}>
                                            <Text style={{ color: 'red' }}>Remover</Text>
                                        </Pressable>
                                    </View>
                                ))
                            ) : (
                                <Text style={{ fontStyle: 'italic' }}>Nenhuma atividade adicionada</Text>
                            )}
                            </View>
        

                        </View>

                    </ScrollView>

                    {/* BOTÃO SALVAR ALTERAÇÕES */}
                    <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
                        <MainButton
                        title="Salvar Alterações"
                        onPress={confirmEditTask}
                        disable={validateTaskEdit()}
                        size={50}
                        />
                    </View>
                    
                </View>
                <View style={styles.modalMainBottom}/>
            </View>

        </Modal>

        <View style={styles.main}>
            <View style={styles.leftView}></View>

            <View style={styles.midView}>

                <View style={styles.midTopView}></View>

                <View style={styles.midCenterView}>

                    <View style={styles.centerIcon}>
                        <Image source={icon ? icons[icon] : icons["default"]} style={{width:'100%', height: '100%'}} contentFit="contain"/>
                    </View>

                    <View style={styles.centerInfo}>
                        <Text style={styles.txtDecorated}>{task.materia}</Text>
                        <Text numberOfLines={2}>{task.topico}</Text>
                    </View>

                </View>

                <View style={styles.midBottomView}>
                    <Text style={styles.txtDecorated}>Estudo total: </Text><Text>{task.tempototal}</Text>
                </View>

            </View>

            <View style={styles.rightView}>

                <Checkbox color={colors.primary} value={isChecked} onValueChange={butao}/>
                <View style={{}}>
                    <Pressable
                    onPress={() => {setModal(true)}}>
                        <Text style={styles.txtDecoratedBtn}>Editar</Text>
                    </Pressable>
                    
                </View>

            </View>
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: colors.viewWBackground,
        elevation: 2, // sombra no Android
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 12,
        padding: 5,
        height: 100,
    },

    leftView: {
        borderLeftWidth: 5,
        borderColor: colors.primary,
    },
    midView: {
        flex: 1,
        paddingLeft: 5,
    },
    rightView: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    midTopView: {
        borderColor: colors.primary,
        borderBottomWidth: 2,
    },
    midCenterView: {
        flex: 1,
        flexDirection: 'row',

    },
    midBottomView: {
        flexDirection: 'row',
    },

    centerIcon: {
        flex: .3,
    },
    centerInfo: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    
    topicInput:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.borderLgrey,
        height: 40,
        paddingHorizontal: 5,
    },
    txtDecorated: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    txtDecoratedBtn: {
        color: colors.primary,
        textDecorationLine: 'underline',
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
        marginHorizontal: 10,
        boxShadow: colors.boxShadowModal,
    },
    modalMainBottom: {
        flex: 1,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 18  ,
    },
    modalHeaderTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalContent: {

    },
    modalTxtInputLabel: {
        fontWeight: 'bold',
    },
});

export default RotinaBox;