import ToDoItem  from "./ToDoItem"; 
import styles from "./todolist.module.css"; 
export default function ToDoList({todos ,setTodos}){
         const  sortedtodos = todos.sort((a,b) =>Number(a.completed) -Number(b.completed));
    return(
        <>
         <div className={ (todos.length> 0)  ? styles.listContainer : styles.hide}>
         { sortedtodos.map(item => <ToDoItem item = {item} key={item.name} todos={todos} setTodos ={setTodos}/>) }
         </div>
        </>
    )
}