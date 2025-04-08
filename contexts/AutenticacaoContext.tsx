import { createContext, useContext, useState, ReactNode } from "react";
import api from "@/services/api";

interface AutenticacaoContextType {
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, pw: string) => Promise<void>;
    logout: () => void;
};

interface AuthProviderProps {
    children: ReactNode;
};

type AutenticacaoType = AutenticacaoContextType & AuthProviderProps;
export const AutenticacaoContext = createContext<AutenticacaoType | undefined>(undefined);

export const AutenticacaoProvider = ({children}: AuthProviderProps) => {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuth] = useState(false);

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

    return(
        <AutenticacaoContext.Provider value={{
            token, isAuthenticated,
            login, logout
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