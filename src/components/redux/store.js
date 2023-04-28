import { configureStore } from "@reduxjs/toolkit";
import toDoReducers from "./toDoSlice";



export const store = configureStore({
    reducer:toDoReducers
});

export default store;