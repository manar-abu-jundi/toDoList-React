
import { useState } from "react";
import styles from "./form.module.css";
export default function Form({todos , setTodos}){
    const [todo , setTodo ] = useState({name:"" , completed :false}); 
    
    function handelSubmit(e){
        e.preventDefault() ; 
        setTodos([...todos , todo]);
        setTodo({name:"" ,completed:false}) ;
    }  

    return(
        <>
          <form onSubmit={(e)=>handelSubmit(e)} className={styles.todoform}>
            <div className={styles.flexContainer}>
            <input  type="text" value={todo.name} onChange={(e) => setTodo({completed:false , name :e.target.value })} className={styles.inputform} placeholder="Enter todo item..."/>
            <button type="submit" className={styles.btnform} >Add</button>
            </div>
         </form> 
        </>
    )
}