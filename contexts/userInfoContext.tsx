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
}

interface UserInfoProviderProps {
    children: ReactNode;
};

export const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);

export const UserInfoContextProvider = ({children,}: UserInfoProviderProps) => {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userCursos, setUserCursos] = useState<string[]>([]);
    const [userImage, setUserImage] = useState<string | null>(null);
    

    const fetchUserData = async (user: string) => {
        try {
          const response = await api.get(`/cat`);
          const imgData = response.data;
        
          setUserName(user); // temporario
          setUserAge('24'); // temporario
          setUserCursos(['BSI','BCC']); // temporario
          setUserImage(imgData);
          setUserCity('Uberlandia'); // temporario
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