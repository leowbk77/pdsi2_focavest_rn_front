import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { saveToken, getToken, deleteToken } from "@/services/storage";
import api from "@/services/api";
import { Buffer } from 'buffer';
import { router } from "expo-router";

import { ToastAndroid, Platform, Alert } from "react-native";

const emptyUser: Login = {
    token: '', 
    user: {
        id: '', 
        nome: '',
        idade: 0,
        email: '',
        cursos: [],
        image: '',
        cidade: '',
    }
};

interface AutenticacaoContextType {
    token: string | null;
    isAuthenticated: boolean;
    userInfo: Login,

    showToast: (mensagem: string) => void;

    editUser: (user: User) => void;
    login: (email: string, pw: string) => Promise<void>;
    logout: () => void;

    createNewUser: (nome:string, email:string, senha:string) => Promise<void>;
};

interface User {
    id: string,
    nome: string,
    idade: number,
    cidade?: string,
    email: string,
    cursos: string[],
    image?: string,
};

interface Login {
    token: string,
    user: User,
};

interface AuthProviderProps {
    children?: ReactNode;
};

type AutenticacaoType = AutenticacaoContextType & AuthProviderProps;
export const AutenticacaoContext = createContext<AutenticacaoType | undefined>(undefined);

export const AutenticacaoProvider = ({children}: AuthProviderProps) => {
    const [token, setToken] = useState<string>('');
    const [isAuthenticated, setIsAuth] = useState(false);

    const [userInfo, setUserInfo] = useState<Login>(emptyUser);

    const showToast = (mensagem: string) => {
        if (Platform.OS === "android") {
            ToastAndroid.show(mensagem, ToastAndroid.SHORT);
        } else {
            Alert.alert(mensagem);
        }
    };
    
    const login = async (email: string, pw: string) => {
        try {
            console.log("login", email, pw);

            const response = await api.post('/api/auth/login', {
                email: email,
                senha: pw
            });

            if(response.status == 201) {
                const receivedToken = response.data.body.token;
                setToken(receivedToken);
                api.defaults.headers.common['Authorization'] = `Bearer ${receivedToken}`;
                const userParFromToken = Buffer.from(receivedToken.split('.')[1], 'base64').toString('utf-8');
                const decodedUserToken = JSON.parse(userParFromToken);
                const userDataResponse = await api.get(`/api/usuarios/${decodedUserToken.user.id}`);

                const login: Login = {
                    token: token,
                    user: {
                        id: userDataResponse.data.id,
                        nome: userDataResponse.data.nome,
                        email: userDataResponse.data.email,
                        idade: userDataResponse.data.idade ? userDataResponse.data.idade : 0,
                        cidade: userDataResponse.data.cidade ? userDataResponse.data.cidade : 'Não informado',
                        cursos: userDataResponse.data.cursos_desejados ? userDataResponse.data.cursos_desejados : [],
                        image: userDataResponse.data.image_url,
                    }
                };

                setUserInfo(login);
                await saveToken(token);
                setIsAuth(true);
                showToast("login bem sucedido");
            }
            
        } catch (error) {
            showToast("erro de login - tente novamente");
            console.log("cannot login: ", error);
        }
    };

    const logout = async () => {
        setIsAuth(false);
        setToken('');
        //setUserInfo() <-- passar user vazio
        await deleteToken();
        delete api.defaults.headers.common['Authorization'];
        showToast("loged out");
    };

    const createNewUser = async (nome: string, email: string, senha: string) => {
        try {
            console.log('Enviando registro: ', nome, email, senha);
            
            const response = await api.post('/api/auth/register', {
                nome: nome,
                email: email,
                senha: senha
            });
    
            if (response.status === 201 || response.status === 200) {
                showToast("Usuário criado com sucesso!");
            } else {
                showToast("Erro ao criar usuário");
            }
        } catch (error) {
            console.log("Erro ao criar usuário:", error);
            showToast("Erro ao criar usuário");
        }
    };

    const editUser = (user: User) => {
        setUserInfo({
            token: token,
            user: user
        });
    };

    return(
        <AutenticacaoContext.Provider value={{
            token, isAuthenticated,
            userInfo, showToast,
            editUser,
            login, logout,

            createNewUser,
        }}>
            {children}
        </AutenticacaoContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AutenticacaoContext);
    if (!context) {
      throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};