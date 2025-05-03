import { createContext, useContext, useState, ReactNode , useEffect} from "react";
import api from "@/services/api";
import { useAuth } from "./AutenticacaoContext";

// icone
// <a href="https://www.flaticon.com/free-icons/university" title="university icons">University icons created by Smashicons - Flaticon</a>

// mock
const vestsMock = [
  {
    "id": "",
    "data": "",
    "pfp": "",
    "uni": "",
    "curso": "",
    "site": ""
  },
];

const nextVestMock: Vest = {
  "id": "6",
  "data": "27/04/2025",
  "pfp": "https://feciv.ufu.br/sites/feciv.ufu.br/files/ufu.png", //
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
    allVests: Vest[];
    addVest: (id: string) => void;
    removeVest: (id: string) => void;
    fetchAllVests: () => Promise<void>;
    fetchNextVest: () => void;
    fetchUserVests: () => void;
}
//\interfaces

export const VestContext = createContext<VestContext | undefined>(undefined);

export const VestContextProvider = ({children,}: VestProviderProps) => {
    const {isAuthenticated, userInfo, showToast} = useAuth();
    const [vests, setVests] = useState<Vest[]>([]);
    const [allVests, setAllVests] = useState<Vest[]>([]);
    const [nextVest, setNextVest] = useState<Vest>(nextVestMock);

    useEffect(() => {
      if(isAuthenticated){
          fetchAllVests();
          fetchNextVest();
          fetchUserVests();
        };
    }, [isAuthenticated]);

    const fetchAllVests = async () => {
      try {
        const response = await api.get('/api/vestibulares');
        if(response.status == 200){
          setAllVests(response.data);
        };
      } catch (error) {
        showToast('Erro ao buscar vestibulares');
        console.log('cant fetch vests: ', error);
      }
    };

    const fetchUserVests = async () => {
      try {
        const response = await api.get('/api/vestibulares');
        if(response.status == 200){
          setVests(response.data);
        };
      } catch (error) {
        showToast('Erro ao buscar vestibulares selecionados');
        console.log('cant fetch vests: ', error);
      }
    };

    const addVest = async (id: string) => {
        try {
          const response = await api.post('/api/vestibular-usuario', {
            usuario_id: userInfo.user.id,
            vestibular_id: id
          });
          if(response.status == 201){
            showToast('Vestibular adicionado!');
          };
        } catch (error) {
          showToast('Vestibular não pode ser adicionado');
          console.log('error: ', error);
        }
    };

    const removeVest = async (id: string) => {
        setVests((prev) => prev.filter((t) => t.id !== id));
    };

    const fetchNextVest = async ()=> {
      try {
        const response = await api.get(`/api/vestibular-usuario/${userInfo.user.id}/proximo`);
        if(response.status == 200){
          setNextVest(
            {
              "id": response.data.body.id,
              "data": response.data.body.data,
              "pfp": response.data.body.pfp,
              "uni": response.data.body.uni,
              "curso": response.data.body.curso,
              "site": response.data.body.site
            });
        };
    
      } catch (error) {
        showToast('Próximo vestibular não encontrado.');
        console.log('cant fetch vests: ', error);
      }
    };

    return(
        <VestContext.Provider value={{
            vests, nextVest,
            allVests, 
            addVest, removeVest,
            fetchAllVests, fetchNextVest,
            fetchUserVests,
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