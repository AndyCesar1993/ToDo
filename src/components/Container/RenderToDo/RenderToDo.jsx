import { useDispatch, useSelector } from "react-redux";
import { UlStyled, LiStyled, ErrorStyled, ClearAllStyled } from "./RenderToDoStyled"
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteAllTasks, deleteTask, getTask } from "../../redux/toDoSlice";


const RenderToDo = () => {
  const tasksList = (useSelector(getTask)).payload;
  const dispath = useDispatch();

  const clearTask = (id)=>{
    dispath(deleteTask(id))
  }


  const tasks = tasksList.map((task) => 
  <LiStyled key={task.id}>{task.value.taskValue}
    <DeleteIcon className="deleteTask" onClick={()=>clearTask(task.id)}/>
  </LiStyled>);
  
  
  return (
    <UlStyled>
      {!tasksList.length ? <ErrorStyled style={{textAlign:"center"}}> No hay tareas!</ErrorStyled> : tasks}
      {!tasksList.length ? "" : <ClearAllStyled onClick={()=>dispath(deleteAllTasks())}>Borrar Todo <DeleteIcon /></ClearAllStyled>}

    </UlStyled>
  );
}

export default RenderToDo
