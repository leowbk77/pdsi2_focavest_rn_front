import { createContext, useContext, useState, ReactNode } from "react";
import api from "@/services/api";

// icone
// <a href="https://www.flaticon.com/free-icons/university" title="university icons">University icons created by Smashicons - Flaticon</a>

// mock
const vestsMock : Vest[] = [{
    "id": "1",
    "data": "27/04/2025",
    "pfp": "https://feciv.ufu.br/sites/feciv.ufu.br/files/ufu.png",
    "uni": "Universidade Federal de Uberlândia",
    "curso": "Sistemas de Informação",
    "site": "ufu.br/"
},];
//\mock

// interfaces
interface VestProviderProps {
    children: ReactNode;
};

export interface Vest {
    id: string,
    data: string,
    pfp?: string,
    uni: string, // pode ser mudado no futuro com um cadastro prévio das universidades
    curso: string,
    site?: string,
};

interface VestContext {
    vests: Vest[];
    addVest: (vest: Vest) => void;
    removeVest: (id: string) => void;
}
//\interfaces

export const VestContext = createContext<VestContext | undefined>(undefined);

export const VestContextProvider = ({children,}: VestProviderProps) => {
    const [vests, setVests] = useState<Vest[]>(vestsMock);

    const addVest = async (vest: Vest) => {
        setVests(prev => [...prev, vest]);
    };

    const removeVest = async (id: string) => {
        setVests((prev) => prev.filter((t) => t.id !== id));
    };

    return(
        <VestContext.Provider value={{
            vests,
            addVest, removeVest,
        }}>
            {children}
        </VestContext.Provider>
    );
};

export const useVest = () => {
    const context = useContext(VestContext);
    if (!context) {
        throw new Error("VestContext error");
    }
    return context;
};