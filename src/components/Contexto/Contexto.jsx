/* import { createContext,useState } from "react";


export const Contexto = createContext();

export const ContextoProvider = ({children})=>{
    const allTasks = localStorage.getItem(JSON.stringify('tasks')) || [];
    const [tasksTodo, setTasksTodo]=useState(allTasks);

    return(
        <Contexto.Provider value={{tasksTodo,setTasksTodo}}>
            {children}
        </Contexto.Provider>
    );


} */