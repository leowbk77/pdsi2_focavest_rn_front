import { createContext, useContext, useState, ReactNode } from "react";
import api from "@/services/api";

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

  fetchNextVestInfoFromJson: () => Promise<void>;
}

interface UserInfoProviderProps {
    children: ReactNode;
};

type ContextType = UserInfoContextType & NextVestContextType;
export const UserInfoContext = createContext<ContextType | undefined>(undefined);

export const UserInfoContextProvider = ({children,}: UserInfoProviderProps) => {
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
    

    const fetchUserData = async (user: string) => {
        try {
          const studentResponse = await api.get("/api/alunos");
          const studentData = studentResponse.data;
    
          setUserName(studentData[0].nome); // temporario
          setUserAge("24"); // temporario
          setUserCursos(studentData[0].cursos_desejados); // temporario
          // setUserImage(imgData);
          setUserCity("Uberlandia"); // temporario
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      };

    
    const fetchUserInfoFromJson = async () => {
      try {
        const userInfoJson = require("@/assets/temp/json/usuario.json");
        setUserName(userInfoJson.nome);
        setUserAge(userInfoJson.idade);
        setUserCity(userInfoJson.cidade);
        setUserCursos(userInfoJson.cursosDesejados.join(", "));
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    const fetchNextVestInfoFromJson = async () => {
      try {
        const userInfoJson = require("@/assets/temp/json/prox_vest.json");
        setData(userInfoJson.data);
        setPfp(userInfoJson.pfp);
        setUni(userInfoJson.universidade);
        setCurso(userInfoJson.curso_desejado);
        setSite(userInfoJson.site);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };
    return (
        <UserInfoContext.Provider value={{ 
            userName, setUserName, 
            userAge, setUserAge, 
            userCursos, setUserCursos, 
            userImage, setUserImage,
            userCity, setUserCity,
            fetchUserData, 
            fetchUserInfoFromJson,
            data, pfp,
            uni, curso,
            site,
            fetchNextVestInfoFromJson,
            }}>
            {children}
        </UserInfoContext.Provider>
    );
};

export const useUserInfo = () => {
    const context = useContext(UserInfoContext);
    if (!context) {
      throw new Error("useUserInfo must be used within a UserInfoContextProvider");
    }
    return context;
};