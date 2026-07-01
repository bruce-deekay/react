import "./TaskCard.css";
import styles from "./TaskCard.module.css";

export const TaskCard = ({task, handleDelete, info}) => {
  return (
    <li className={`taskcard ${task.completed ?"completed":"incomplete"}`}>
      {/* Assigned the classname using JS(`className${}`) */}
          <span className={styles.title}>{task.id} - {task.name} </span>
          <button onClick={()=>handleDelete(task.id)} className='delete'>Delete</button>
          {/* created delete function as an anonymous function */}
    </li>
  )
}
