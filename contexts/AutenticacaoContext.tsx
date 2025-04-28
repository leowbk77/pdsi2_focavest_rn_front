import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { saveToken, getToken, deleteToken } from "@/services/storage";
import api from "@/services/api";
import { Buffer } from 'buffer';
import { router } from "expo-router";

const userMock: Login = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiaWF0IjoxNjkxMjM4NzYyLCJleHAiOjE2OTEyNDIzNjJ9.D2Vsb2dvLXVzZXItYXV0aC10b2tlbg",
    "user": {
      "id": "123",
      "nome": "João da Silva",
      "email": "joao.silva@email.com",
      "idade": 28,
      "cidade": "São Paulo",
      "cursos": [
        "Ciência da Computação",
        "Engenharia de Software",
        "Análise e Desenvolvimento de Sistemas"],
      "image": "https://cataas.com/cat"
    }
};

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

    login: (email: string, pw: string) => Promise<void>;
    logout: () => void;

    loginFromJson: (email: string, pw: string) => Promise<void>;
    logoutJson: () => void;

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

    const [userInfo, setUserInfo] = useState<Login>(userMock);
    
    const login = async (email: string, pw: string) => {
        try {
            console.log("login", email, pw);

            const response = await api.post('/api/auth/login', {
                email: email,
                senha: pw
            });

            if(response.status == 201) {

                setToken(response.data.body.token);
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const decodedUserToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf-8'));
                const userData = JSON.parse(decodedUserToken.user);
                const userDataResponse = await api.get(`/api/usuarios/${userData.id}`);

                const login: Login = {
                    token: token,
                    user: {
                        id: userDataResponse.data.id,
                        nome: userDataResponse.data.nome,
                        email: userDataResponse.data.email,
                        idade: userDataResponse.data.idade ? userDataResponse.data.idade : 0,
                        cidade: userDataResponse.data.cidade ? userDataResponse.data.cidade : 'Não definido',
                        cursos: userDataResponse.data.cursos_desejados ? userDataResponse.data.cursos_desejados : [],
                        image: userDataResponse.data.image_url,
                    }
                };

                setUserInfo(login);
                await saveToken(token);
                setIsAuth(true);
                console.log('login');
            }
            
        } catch (error) {
            console.log("cannot login: ", error);
        }
    };

    const logout = async () => {
        setIsAuth(false);
        setToken('');
        //setUserInfo() <-- passar user vazio
        await deleteToken();
        api.defaults.headers.delete['Authorization'];
        console.log("loged out");
    };

    const createNewUser = async (nome: string, email: string, senha: string) => {
        const newUser = {
            nome: nome,
            email: email,
            senha: senha,
        };

        try {
            console.log('enviando registro: ', nome, email, senha);
            const response = await api.post('https://focavest-backend.onrender.com/api/auth/register', newUser).then((response) => {console.log(response)});
        } catch (error) {
            console.log(error);
        }
    };


    /* ============================================== MOCK ==============================================*/
    const loginFromJson = async (email: string, pw: string) => {
        try {
            if(userInfo.user.email == email) {
                setToken(userInfo.token);
                // api.defaults.headers.common['Authorization'] = `Bearer ${receivedToken}`;
                await saveToken(userInfo.token);
                setIsAuth(true);
                console.log('login');
            }
        } catch (error) {
            console.log("cannot login: ", error);
        }
    };

    const logoutJson = async () => {
        if(isAuthenticated) {
            setToken('');
            setUserInfo(emptyUser);
            await deleteToken();
            setIsAuth(false);
            console.log('Logout');
            //router.replace('/');
            // delete api.defaults.headers.common['Authorization'];
        }
    };
    /* ============================================== MOCK FROM JSON ==============================================*/

    return(
        <AutenticacaoContext.Provider value={{
            token, isAuthenticated,
            userInfo,

            login, logout,
            loginFromJson, logoutJson,

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