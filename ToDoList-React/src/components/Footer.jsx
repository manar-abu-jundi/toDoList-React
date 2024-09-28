import styles from "./footer.module.css" ;
export default function Footer({total , completed}){

   return( <>
    <div className={styles.footer}>
    <span className={styles.item} >completed count : {completed}</span>
    <span>total count : {total}</span>
    </div>
 </>)
}