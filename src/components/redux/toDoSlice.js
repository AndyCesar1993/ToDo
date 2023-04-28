import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const toDoSlice = createSlice({
    name:'toDo',
    initialState:initialState,
    reducers:{
        getTask:(state) => {state},
        addTask:(state,action)=> {
            const newTask={
                id:(+new Date()).toString(),
                value: action.payload,
            };
            state.push(newTask)

        },

        deleteTask:(state,action)=> {
            const idDelete= action.payload

            return state.filter((task) => task.id !== idDelete )
            
        },

        deleteAllTasks:(state)=>{
            return initialState;
        },
    }

})
export const{getTask,addTask,deleteAllTasks,deleteTask}=toDoSlice.actions;

export default toDoSlice.reducer;