
import styles from "./todoitem.module.css"
function ToDoItem({item , todos , setTodos }){

           function handelDelete (item) {
               setTodos( todos.filter((el)=> el.name != item.name)); 
               
           }

           function handelClick (name){
            console.log(name) ;
            setTodos( todos.map( (todo) => todo.name == name ? {...todo ,completed : !todo.completed} : todo ))
             console.log(todos)
           }
    return(
        <>
          <div className={styles.todoitemcontainer}>
               <span className={item.completed ? styles.completed : ""}> <h3 className={styles.todoitem} onClick={()=>handelClick(item.name)}>{item.name}</h3></span>
              <button onClick={()=>handelDelete( item)} className={styles.deletebtn}>X</button>
          </div>
         
        </>

    )
}

export default ToDoItem ; 