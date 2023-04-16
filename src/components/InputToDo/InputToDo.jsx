
import { useState } from "react"
import { FormStyled,InputStyled } from "./InputToDoStyled"

const InputToDo = props => {

const { handleAddItem } = props;

const [taskValue,setTaskValue] = useState("");

const setToDo = e =>{
    e.preventDefault();

    handleAddItem({
        id: (+new Date()).toString(),
        taskValue
    });
    
    setTaskValue("")
}   


return (
    <FormStyled onSubmit={setToDo}>
        <InputStyled  onChange={(e)=>setTaskValue(e.target.value)} value={taskValue} type="text" placeholder="Escriba su tarea"/>
        <button disabled={taskValue? "" : "disabled"}>Enviar</button>
    </FormStyled>
)

}

export default InputToDo
