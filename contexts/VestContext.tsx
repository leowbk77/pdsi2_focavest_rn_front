import { createContext, useContext, useState, ReactNode } from "react";
import api from "@/services/api";

// icone
// <a href="https://www.flaticon.com/free-icons/university" title="university icons">University icons created by Smashicons - Flaticon</a>

// mock
const vestsMock = [
  {
    "id": "1",
    "data": "27/04/2025",
    "pfp": "https://feciv.ufu.br/sites/feciv.ufu.br/files/ufu.png",
    "uni": "Universidade Federal de Uberlândia",
    "curso": "Sistemas de Informação",
    "site": "ufu.br/"
  },
  {
    "id": "2",
    "data": "12/05/2025",
    "pfp": "https://www.unicamp.br/unicamp/sites/default/files/logo-unicamp-2020.png",
    "uni": "Universidade Estadual de Campinas",
    "curso": "Engenharia da Computação",
    "site": "vestibular.unicamp.br/"
  },
  {
    "id": "3",
    "data": "05/06/2025",
    "pfp": "https://www5.usp.br/wp-content/themes/usp/images/logo-usp.png",
    "uni": "Universidade de São Paulo",
    "curso": "Ciência da Computação",
    "site": "fuvest.br/"
  },
  {
    "id": "4",
    "data": "18/06/2025",
    "pfp": "https://www.uerj.br/wp-content/uploads/2020/05/Marca_Uerj_Negativa-1024x319.png",
    "uni": "Universidade do Estado do Rio de Janeiro",
    "curso": "Engenharia de Software",
    "site": "uerj.br/vestibular/"
  },
  {
    "id": "5",
    "data": "30/06/2025",
    "pfp": "https://portal.ufpa.br/images/LogoUFPA.png",
    "uni": "Universidade Federal do Pará",
    "curso": "Análise e Desenvolvimento de Sistemas",
    "site": "ceps.ufpa.br/"
  }
];

const nextVestMock: Vest = {
  "id": "6",
  "data": "27/04/2025",
  "pfp": "", //https://feciv.ufu.br/sites/feciv.ufu.br/files/ufu.png
  "uni": "Universidade Federal de Uberlândia",
  "curso": "Sistemas de Informação",
  "site": "ufu.br/"
};
//\mock

// interfaces
interface VestProviderProps {
    children: ReactNode;
};

export interface Vest {
    id: string,
    data: string,
    pfp?: string,
    uni: string,
    curso: string,
    site?: string,
};

interface VestContext {
    vests: Vest[];
    nextVest: Vest;
    addVest: (vest: Vest) => void;
    removeVest: (id: string) => void;
}
//\interfaces

export const VestContext = createContext<VestContext | undefined>(undefined);

export const VestContextProvider = ({children,}: VestProviderProps) => {
    const [vests, setVests] = useState<Vest[]>(vestsMock);
    const [nextVest, setNextVest] = useState<Vest>(nextVestMock);

    const addVest = async (vest: Vest) => {
        setVests(prev => [...prev, vest]);
    };

    const removeVest = async (id: string) => {
        setVests((prev) => prev.filter((t) => t.id !== id));
    };

    return(
        <VestContext.Provider value={{
            vests, nextVest,
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