import { useState } from "react";
import "./AddTask.css";

export const AddTask = () => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);
    
    const handleReset = () => {
        setTaskValue("");
        setProgress(false);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // this event.preventDefault stops the page from refreshing when we click submit
        const task = {
            id:Math.floor(Math.random()*10000),
            name:taskValue,
            completed:Boolean(progress)
            // Boolean() function helps convert progress value to a boolean, without this fuction it's value will be a string
        }
        console.log(task);
        handleReset();
    }
  return (
    <section className="addtask">
        <form action="" onSubmit={handleSubmit}>
            {/* <label htmlFor="task">Task Name:</label> */}
            <input onChange={(e) => setTaskValue(e.target.value)} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue}/>
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
        <p>{taskValue}</p>
    </section>
  )
}
