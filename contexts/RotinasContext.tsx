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

interface Rotina {
    materia: string, // number ? identificar as materias por enum
    submateria: string,
    tempototal: number,
    tarefas?: TaskType[],
};