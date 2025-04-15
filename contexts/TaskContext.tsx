import { createContext, useContext, useState, ReactNode } from "react";
import api from "@/services/api";

// mocks
const eventsMockList = {
    '2025-04-13': [
        {start: '2025-04-13 09:20:00', end: '2025-04-13 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8', materia: 'matematica'}, 
        {start: '2025-04-13 20:00:00', end: '2025-04-13 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8', materia: 'física'}],
    
    '2025-04-14': [
        {start: '2025-04-14 09:20:00', end: '2025-04-13 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8', materia: 'matematica'}, 
        {start: '2025-04-14 20:00:00', end: '2025-04-13 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8', materia: 'física'}],
            
    '2025-04-15': [
        {start: '2025-04-15 09:20:00', end: '2025-04-13 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8', materia: 'matematica'}, 
        {start: '2025-04-15 20:00:00', end: '2025-04-13 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8', materia: 'física'}],
        
    '2025-04-16': [
        {start: '2025-04-16 09:20:00', end: '2025-04-13 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8', materia: 'matematica'}, 
        {start: '2025-04-16 20:00:00', end: '2025-04-13 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8', materia: 'física'}],
        
    '2025-04-17': [
        {start: '2025-04-17 09:20:00', end: '2025-04-13 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8', materia: 'matematica'}, 
        {start: '2025-04-17 20:00:00', end: '2025-04-13 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8', materia: 'física'}],
};

const rotinaMock = {
    'materia': 'Matematica',
    'assunto': 'Trigonometria',
    'eventos': eventsMockList,
}
//mocks

//interfaces
interface TaskContent {
    start: string;
    end: string;
    title: string;
    summary?: string;
    color?: string;
    materia?: string;
};

interface TaskType {
    [date:string] : TaskContent[];
};

interface RotinaType {
    materia: string,
    assunto: string,
    eventos?: TaskType,
}

interface TaskInfoContextType {
    tasks: TaskType;
    dates: string[];
    addTask: (date: string, task: TaskContent) => void;
    removeTask: (date: string) => void;
};

interface TaskInfoProviderProps {
    children: ReactNode;
};
//interfaces

export const TaskContext = createContext<TaskInfoContextType | undefined>(undefined);

export const TaskInfoContextProvider = ({children,}: TaskInfoProviderProps) => {
    const [tasks, setTasks] = useState<TaskType>(eventsMockList);
    const dates = Object.keys(tasks);

    const addTask = async (date: string, task: TaskContent) => {
        setTasks((prev) => ({
            ...prev,
            [date]: prev[date] ? [...prev[date], task] : [task],
        }));
    };

    const removeTask = async (date: string) => {
        setTasks((prev) => {
            const update = {...prev};
            delete update[date];
            return update;
        });
    };

    return(
        <TaskContext.Provider value={{
            tasks, dates,
            addTask, removeTask
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