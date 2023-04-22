
import { useContext, useState } from "react"
import { FormStyled,InputStyled } from "./InputToDoStyled"
import { Contexto } from "../Contexto/Contexto";

const InputToDo = () => {
    const { tasksTodo, setTasksTodo } =useContext(Contexto);

const [taskValue,setTaskValue] = useState("");

const setToDo = e =>{
    e.preventDefault();
    setTasksTodo([...tasksTodo,{taskValue, id:(+new Date()).toString()}])
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
