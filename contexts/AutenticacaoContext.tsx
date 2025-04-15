import { createContext, useContext, useState, ReactNode } from "react";
import { saveToken, getToken, deleteToken } from "@/services/storage";
import api from "@/services/api";

interface AutenticacaoContextType {
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, pw: string) => Promise<void>;
    logout: () => void;

    loginFromJson: (email: string, pw: string) => Promise<void>;
    logoutJson: () => void;
};

interface UserInfoContextType {
    userName: string;
    setUserName: (name: string) => void;

    userAge: string;
    setUserAge: (age: string) => void;

    userCity: string;
    setUserCity: (city: string) => void;

    userCursos: string[];
    setUserCursos: (cursos: string[]) => void;

    userImage: string | null;
    setUserImage: (image: string | null) => void;

    fetchUserData: (userId: string) => Promise<void>;

    fetchUserInfoFromJson: () => Promise<void>;
}

interface NextVestContextType {
    data: string;
    setData: (dataStr: string) => void;
  
    pfp: string;
    setPfp: (pfpStr: string) => void;
  
    uni: string;
    setUni: (uniStr: string) => void;
  
    curso: string;
    setCurso: (cursoStr: string) => void;
  
    site: string;
    setSite: (siteStr: string) => void;
}

interface AuthProviderProps {
    children: ReactNode;
};

type AutenticacaoType = AutenticacaoContextType & NextVestContextType & AuthProviderProps & UserInfoContextType;
export const AutenticacaoContext = createContext<AutenticacaoType | undefined>(undefined);

export const AutenticacaoProvider = ({children}: AuthProviderProps) => {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuth] = useState(false);

    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userCursos, setUserCursos] = useState<string[]>([]);
    const [userImage, setUserImage] = useState<string | null>(null);

    const [data, setData] = useState("");
    const [pfp, setPfp] = useState("");
    const [uni, setUni] = useState("");
    const [curso, setCurso] = useState("");
    const [site, setSite] = useState("");
    

    const login = async (email: string, pw: string) => {
        try {
            console.log("login", email, pw);
            setIsAuth(true);
        } catch (error) {
            console.log("cannot login: ", error);
        }
    };

    const logout = () => {
        console.log("loged out");
        setIsAuth(false);
    };


    /* ============================================== MOCK FROM JSON ==============================================*/
    const json = require('@/assets/temp/json/auth.json');

    const loginFromJson = async (email: string, pw: string) => {
        try {
            if(json.user.email == email) {
                setToken(json.token);
                // api.defaults.headers.common['Authorization'] = `Bearer ${receivedToken}`;
                await saveToken(json.token);
                fetchUserInfoFromJson();
                setIsAuth(true);
            }
        } catch (error) {
            console.log("cannot login: ", error);
        }
    };

    const logoutJson = async () => {
        if(isAuthenticated) {
            setToken(null);
            setUserName("");
            setUserCity("");
            setUserCursos([]);
            setUserImage("");
            await deleteToken();
            // delete api.defaults.headers.common['Authorization'];
        }
    };

    const fetchUserInfoFromJson = async () => {
        try {
            const userInfoJson = json.user
            setUserName(userInfoJson.nome);
            setUserAge(userInfoJson.idade);
            setUserCity(userInfoJson.cidade);
            setUserCursos(userInfoJson.cursosDesejados.join(", "));
            setUserImage(userInfoJson.image);
          
            const nextVestJson = require("@/assets/temp/json/prox_vest.json");
            setData(nextVestJson.data);
            setPfp(nextVestJson.pfp);
            setUni(nextVestJson.universidade);
            setCurso(nextVestJson.curso_desejado);
            setSite(nextVestJson.site);
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    };
    /* ============================================== MOCK FROM JSON ==============================================*/

    return(
        <AutenticacaoContext.Provider value={{
            token, isAuthenticated,
            login, logout,
            loginFromJson, logoutJson,
            //userInfo
            userName, userAge,
            userCursos, userImage,
            userCity,
            //nextVest
            data, pfp,
            uni, curso,
            site,
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