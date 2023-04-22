import { useContext } from "react";
import { UlStyled, LiStyled, ErrorStyled, ClearAllStyled } from "./RenderToDoStyled"
import DeleteIcon from '@mui/icons-material/Delete';
import { Contexto } from "../Contexto/Contexto";


const RenderToDo = () => {
  const { tasksTodo, setTasksTodo } = useContext(Contexto);
  localStorage.setItem('tasks', JSON.stringify(tasksTodo));

  const clearTask = (id)=>{
    const deleteTask = tasksTodo.filter((task)=>task.id !== id);
    setTasksTodo(deleteTask)
  }

  const tasks = tasksTodo.map((task) => 
  <LiStyled key={task.id}>{task.taskValue}
    <DeleteIcon className="deleteTask" onClick={()=>clearTask(task.id)}/>
  </LiStyled>);
  
  const clearAllTasks = () => {
    setTasksTodo([])
  }

  
  return (
    <UlStyled>
      {!tasksTodo.length ? <ErrorStyled style={{textAlign:"center"}}> No hay tareas!</ErrorStyled> : tasks}
      {!tasksTodo.length ? "" : <ClearAllStyled onClick={clearAllTasks}>Borrar Todo <DeleteIcon /></ClearAllStyled>}

    </UlStyled>
  );
}

export default RenderToDo
