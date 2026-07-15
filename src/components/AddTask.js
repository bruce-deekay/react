import { useState, useRef } from "react";
import "./AddTask.css";

export const AddTask = ({tasks, setTasks}) => {
    // getting tasks and setTasks from App.js 
    // const [taskValue, setTaskValue] = useState("");
    // Initially the eference and rendering was being done by the above const before commenting and importing useRef
    const taskRef = useRef("");
    // useRef is ahook that lets create a eference point to any element for whichever element we want and we can accessand change its info anytime we want but we cannot render it
    const [progress, setProgress] = useState(false);
    
    // const handleChange = (event) =>{
    //     console.log(taskRef.current.value);
    // we dont need this since we are not saving a taskValue
    // }

    const handleReset = () => {
        // setTaskValue("");
        setProgress(false);
        taskRef.current.value = "";
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // this event.preventDefault stops the page from refreshing when we click submit
        const task = {
            id:Math.floor(Math.random()*10000),
            name:taskRef.current.value,
            completed:Boolean(progress)
            // Boolean() function helps convert progress value to a boolean, without this fuction it's value will be a string
        }
        console.log(task);
        setTasks([...tasks, task]);
        // ...tasks is from the parent in App.js, task is gotten dynalically from user 
        handleReset();
    }
  return (
    <section className="addtask">
        <form action="" onSubmit={handleSubmit}>
            {/* <label htmlFor="task">Task Name:</label> */}
            <input type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" ref={taskRef}/>
            {/* onChange function is what helps us when working with submit */}
            <select name="" id="" onChange={(event)=>setProgress(event.target.value)} value={progress}>
                {/* value property lets us reset the progress to false once we click on reset or addtask */}
                <option value="false">Pending</option>
                <option value="true">Completed</option>
            </select>
            <span onClick={handleReset} className="reset">Reset</span>
            {/* we dont use a button here because using it will make us refresh the page and we will have to involve even .prevent default*/}
            {/* The value place holder is what helps us when reseting the values in the input box to be default */}
            <button type="submit">Add Task</button>
            
        </form>
        <p>{taskRef.current.value}</p>
    </section>
  )
}
