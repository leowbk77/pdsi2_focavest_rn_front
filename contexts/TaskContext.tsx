import { createContext, useContext, useState, ReactNode, useEffect  } from "react";
import api from "@/services/api";
import { CalendarUtils } from "react-native-calendars";
import { lectures } from "@/components/LectureIcons";
import * as Notifications from 'expo-notifications';
import { useAuth } from "./AutenticacaoContext";

// mock
const tasksMock : Task[] = [
    {
        id: "1",
        materia: 'Matemática',
        topico: 'Matematica 1',
        tempototal: 22,
        data: '2025-04-13',
        tasks: [
            {start: '2025-04-13 09:20:00', end: '2025-04-13 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8', id: '1'}, 
            {start: '2025-04-13 20:00:00', end: '2025-04-13 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8', id: '2'}]
    },
];
// \mock

//interfaces
interface TaskProviderProps {
    children: ReactNode;
};

export interface TaskContent {
    id: string;
    start: string;
    end: string;
    title: string;
    summary?: string;
    color?: string;
};

export interface Task {
    id: string,
    materia: string,
    topico: string,
    tempototal?: number,
    data: string,
    tasks: TaskContent[],
};

interface TaskContext {
    materias: string[];
    today: Date;
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (date: string) => void;
    todayTasks: () => Task[];
    editTask: (task:Task) => void;
}
// \interfaces

export const TaskContext = createContext<TaskContext | undefined>(undefined);

export const TaskContextProvider = ({children,}: TaskProviderProps) => {
    
    const {isAuthenticated, userInfo, showToast} = useAuth();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [progresso, setProgresso] = useState('');
    const today = new Date();
    const materias = lectures;

    useEffect(() => {
        if(isAuthenticated){
            fetchUserRotinas();
            fetchProgresso();
          };
      }, [isAuthenticated]);
    

    const fetchUserRotinas = async () => {
        try {
            const response = await api.get(`/api/rotinas/${userInfo.user.id}`);
            if(response.status == 200){
                showToast('Rotinas carregadas');
            };
            
        } catch (error) {
            console.log('error', error);
        }
    };

    const fetchProgresso = async () => {
      try {
        const response = await api.get(`/api/rotinas/progresso/${userInfo.user.id}`);
        if(response.status == 200){
          console.log(response.data);
        };
      } catch (error) {
        showToast('Erro ao buscar o progresso semanal');
        console.log('cant fetch vests: ', error);
      }
    };

    const addTask = async (task: Task) => {
        setTasks(prev => [...prev, task]);
        showToast('Rotina adicionada');
        /*
        try {
            const response = await api.post('/api/rotinas', {
                nome: userInfo.user.nome,
                descricao: task.topico,
                materia: task.materia,
                topico: task.topico,
                data: task.data,
                usuarioId: userInfo.user.id,
            });
            if(response.status == 200){

            };
            
        } catch (error) {
            console.log('erro', error);
        }*/
    };

    const removeTask = async (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    const editTask = async (task: Task) => {
        setTasks((prev) => prev.map((t) => t.id === task.id ? task : t));
    };

    const todayTasks = () => {
        const today = CalendarUtils.getCalendarDateString(Date());
        return tasks.filter((t) => t.data == today);
    };

    return(
        <TaskContext.Provider value={{
            today,
            tasks,
            materias,
            addTask, removeTask,
            editTask, todayTasks,
        }}>{children}
        </TaskContext.Provider>);
};

export const useTaskInfo = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("TaskInfoContext error");
    }
    return context;
};