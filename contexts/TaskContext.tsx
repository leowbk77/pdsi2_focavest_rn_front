import { createContext, useContext, useState, ReactNode } from "react";
import api from "@/services/api";
import { CalendarUtils } from "react-native-calendars";

// mock
const tasksMock : Task[] = [
    {
        id: "1",
        materia: 'Matematica',
        topico: 'Matematica 1',
        tempototal: 22,
        data: '2025-04-13',
        tasks: [
            {start: '2025-04-13 09:20:00', end: '2025-04-13 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8'}, 
            {start: '2025-04-13 20:00:00', end: '2025-04-13 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8'}]
    },
    {
        id: "2",
        materia: 'Física',
        topico: 'Física 1',
        tempototal: 14,
        data: '2025-04-14',
        tasks: [
            {start: '2025-04-14 09:20:00', end: '2025-04-14 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8'}, 
            {start: '2025-04-14 20:00:00', end: '2025-04-14 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8'}]
    },
    {
        id: "3",
        materia: 'Matematica',
        topico: 'Matematica 1',
        tempototal: 10,
        data: '2025-04-21',
        tasks: [
            {start: '2025-04-21 09:20:00', end: '2025-04-21 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8'}, 
            {start: '2025-04-21 20:00:00', end: '2025-04-21 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8'}]
    },
    {
        id: "4",
        materia: 'Matematica',
        topico: 'Matematica 1',
        tempototal: 8,
        data: '2025-04-21',
        tasks: [
            {start: '2025-04-21 09:20:00', end: '2025-04-21 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8'}, 
            {start: '2025-04-21 20:00:00', end: '2025-04-21 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8'}]
    },
    {
        id: "5",
        materia: 'Física',
        topico: 'Física 1',
        tempototal: 7,
        data: '2025-04-17',
        tasks: [
            {start: '2025-04-17 09:20:00', end: '2025-04-17 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8'}, 
            {start: '2025-04-17 20:00:00', end: '2025-04-17 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8'}]
    },
    {
        id: "6",
        materia: 'Física',
        topico: 'Física 2',
        tempototal: 8,
        data: '2025-04-17',
        tasks: [
            {start: '2025-04-17 09:20:00', end: '2025-04-17 12:00:00', title: 'Teste', summary: 'Teste', color: '#e6add8'}, 
            {start: '2025-04-17 20:00:00', end: '2025-04-17 20:20:00', title: 'Apresentação', summary: 'pdsi2', color: '#e6add8'}]
    }
];
// \mock

//interfaces
interface TaskProviderProps {
    children: ReactNode;
};

export interface TaskContent {
    start: string;
    end: string;
    title: string;
    summary?: string;
    color?: string;
};

export interface Task {
    id: string,
    materia: string, // number ? identificar as materias por enum
    topico: string,
    tempototal: number,
    data: string,
    tasks: TaskContent[],
};

interface TaskContext {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (date: string) => void;
    todayTasks: () => Task[];
}
// \interfaces

export const TaskContext = createContext<TaskContext | undefined>(undefined);

export const TaskContextProvider = ({children,}: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>(tasksMock);

    const addTask = async (task: Task) => {
        setTasks(prev => [...prev, task]);
    };

    const removeTask = async (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    const todayTasks = () => {
        const today = CalendarUtils.getCalendarDateString(Date());
        return tasks.filter((t) => t.data == today);
    };

    return(
        <TaskContext.Provider value={{
            tasks,
            addTask, removeTask,
            todayTasks
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