
import { useState } from "react"
import { FormStyled,InputStyled } from "./InputToDoStyled"
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/toDoSlice";

const InputToDo = () => {

const [taskValue,setTaskValue] = useState("");
const dispatch = useDispatch()

const setToDo = e =>{
    e.preventDefault();
    dispatch(addTask({taskValue}))
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
