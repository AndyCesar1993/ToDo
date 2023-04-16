import { useState } from "react";
import InputToDo from "../InputToDo/InputToDo"
import RenderToDo from "../RenderToDo/RenderToDo"


const Container = () => {

    const allTasks = JSON.parse(localStorage.getItem('tasks'));

    const [list,setList]= useState(allTasks);

    const handleAddItem = addItem =>{
        setList([...list,addItem])
    };

    return (
        <div>
            <InputToDo handleAddItem={handleAddItem} />
            <RenderToDo list={list} setList={setList} />
        </div>
    )
}
export default Container
