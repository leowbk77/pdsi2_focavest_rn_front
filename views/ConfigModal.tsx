import { Link, router } from "expo-router";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "@/styles/color";
import Ionicons from '@expo/vector-icons/Ionicons';

import { useAuth } from "@/contexts/AutenticacaoContext"; 
import { useState } from "react"; 
import { TextInput, Pressable } from "react-native"; 
import AddedCursoBox from "@/components/AddedCursoBox";


const ConfigModal = () => {
    const { userInfo, editUser } = useAuth();

    const [nome, setNome] = useState(userInfo.user.nome);
    const [cidade, setCidade] = useState(userInfo.user.cidade || '');
    const [idade, setIdade] = useState(String(userInfo.user.idade));
    const [curso, setCurso] = useState('');
    const [cursos, setCursos] = useState<string[]>([]);

    /*
    * Aplica as mudancas
    */
    const handleSaveChanges = () => {
        editUser(
            {
                id: userInfo.user.id,
                nome: nome,
                idade: Number(idade),
                cidade: cidade,
                email: userInfo.user.email,
                cursos: cursos,
                image: userInfo.user.image,
            }
        );
    };

    /*
    * Cursos
    */
    const handleCursos = () => {
        setCursos(prev => [...prev, curso]); 
        setCurso('');
    };
    /*
    *  Remove o curso
    */
    const removeCurso = (curso: string) => {
        setCursos(prev => prev.filter(c => c !== curso));
    };

    return(
        <View style={styles.main}>

            <View style={styles.top} />

            <View style={styles.mid}>

                    
                    <View style={styles.header}>
                        
                        <View />
                        <View>
                            <Text style={styles.headerTxt}>PERFIL</Text>
                        </View>
                        <View>
                            <Link href={'../'}>
                                <Ionicons name="close" size={24} color={colors.primary} />
                            </Link>
                        </View>
                    </View>

                    
                    <ScrollView contentContainerStyle={{}} showsVerticalScrollIndicator={false}>
                        
                        <View style={{flex:1 , padding: 15 }}>

                            <Text style={styles.label}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                value={nome}
                                onChangeText={setNome}
                            />

                            <Text style={styles.label}>Cidade</Text>
                            <TextInput
                                style={styles.input}
                                value={cidade}
                                onChangeText={setCidade}
                            />

                            <Text style={styles.label}>Idade</Text>
                            <TextInput
                                style={styles.input}
                                value={idade}
                                onChangeText={setIdade}
                                keyboardType="numeric"
                            />

                            
                            <Text style={styles.label}>Cursos desejados</Text>
                            <View style={{}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 9}}>
                                        <TextInput
                                        style={styles.input}
                                        value={curso}
                                        onChangeText={setCurso}/>
                                    </View>
                                    <View style={{ flex: 2 , backgroundColor: colors.primary, borderRadius: 5, alignItems: 'center', justifyContent: 'center', margin: 5}}>
                                        <Pressable onPress={handleCursos}>
                                            <Text style={{color: 'white'}}>+</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={{borderWidth: 1, borderRadius: 5, marginTop: 5}}>
                                    {
                                        cursos.length ? 
                                            cursos.map((curso, i) => <AddedCursoBox key={i} curso={curso} remove={removeCurso}/>) :
                                            <View />
                                    }
                                </View>
                            </View>


                        </View>
                    </ScrollView>

                    <View style={{padding: 10}}>
                        <Pressable style={styles.saveButton} onPress={handleSaveChanges}>
                            <Text style={styles.saveButtonText}>Salvar Alterações</Text>
                        </Pressable>
                    </View>
            </View>

            <View style={styles.bottom} />

        </View>
    );
};

// https://www.yogalayout.dev/playground
// https://reactnative.dev/docs/layout-props

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
        flex: 8,
        backgroundColor: colors.viewWBackground,
    },
    bottom: {
        flex: 1,
        backgroundColor: colors.modalBackground,
    },


    return: {
        fontSize: 30,
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    label: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.borderLgrey,
        borderRadius: 5,
        padding: 8,
        marginTop: 5,
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

});

export default ConfigModal;