import { createContext, useContext, useState, ReactNode } from "react";
import { saveToken, getToken, deleteToken } from "@/services/storage";
import api from "@/services/api";

interface AutenticacaoContextType {
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, pw: string) => Promise<void>;
    logout: () => void;

    loginFromJson: () => Promise<void>;
    logoutJson: () => void;
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

    const loginFromJson = async () => {
        try {
            const json = require('@/assets/temp/json/auth.json');
            setToken(json.token);
            // api.defaults.headers.common['Authorization'] = `Bearer ${receivedToken}`;
            await saveToken(json.token);
        } catch (error) {
            console.log("cannot login: ", error);
        }
    };
    const logoutJson = async () => {
        setToken(null);
        await deleteToken();
        // delete api.defaults.headers.common['Authorization'];
    };

    return(
        <AutenticacaoContext.Provider value={{
            token, isAuthenticated,
            login, logout,
            loginFromJson, logoutJson,
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