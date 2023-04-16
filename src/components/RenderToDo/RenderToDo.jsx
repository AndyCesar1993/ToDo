import { useState } from "react";
import { UlStyled,LiStyled,ErrorStyled,ClearAllStyled } from "./renderToDoStyled"
import DeleteIcon from '@mui/icons-material/Delete';


const RenderToDo = props => {
  const { list, setList } = props;
  
  localStorage.setItem('tasks', JSON.stringify(list))

 
  const tasks = list.map((task) => <LiStyled key={task.id}>{task.taskValue} </LiStyled>);
  
    
  const clearAllTasks =()=>{
    setList([])
    
  }

  

  return (
    <UlStyled>
      
      {!list.length ? <ErrorStyled> No hay tareas! </ErrorStyled> : tasks}
      {!list.length ? "" :<ClearAllStyled onClick={clearAllTasks}>Borrar Todo <DeleteIcon/> </ClearAllStyled>}

    </UlStyled>
  );
}

export default RenderToDo
