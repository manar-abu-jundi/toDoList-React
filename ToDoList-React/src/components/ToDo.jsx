import { useState } from "react";
import Form from "./Form"
import ToDoList from "./ToDoList";
import Footer from "./Footer";
function ToDo(){
   
    const [todos , setTodos] = useState([]) ;
       let countCompleted = (todos.filter((el) => el.completed == true)).length ; 
    return(
        <>
            <Form todos={todos} setTodos={setTodos} />
            <ToDoList  todos={todos} setTodos={setTodos}/>
            <Footer total={todos.length}  completed={countCompleted}/>
        </> 
    ) 
}

export default ToDo ; 