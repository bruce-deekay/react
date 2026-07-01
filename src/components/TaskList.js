import React from 'react';
import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { AlertCard } from './AlertCard';
import { BoxCard } from './BoxCard';
import './TaskList.css';

export const TaskList = ({info}) => {
    const [tasks, setTasks] = useState([{id: 1, name: "Record Lecture", completed: true}, 
        {id: 12, name: "Edit Lecture", completed: false}, 
        {id: 13, name: "Watch Lecture", completed: false}]
      );
    
      const[show, setShow] = useState(true);
      const styles={color:show? "rgb(173, 255, 47)": "#be3434", 
                    border:"2px solid",
                    borderRadius:"5px",
                    // When using inline CSS to style, we cant use dash(-) because JS will interpret it as minus symbol so we use camel case instead 
                    borderColor:show? "rgb(173, 255, 47)": "#be3434",
                    padding:"20px"
                  };
    
    function handleDelete(id){
      setTasks(tasks.filter(task=> task.id !== id));
    };

  return (
    <section className='tasklist'>
        <h1 style={styles}>Task List </h1>
        {/* when using inline CSS styling we store it like a dynamic content first({}) then we use key value pairs for the styling. We can put them directly in another pair of curled parenthesis or we can create them as objects and call them like the example above */}
        <ul>
          <button className='trigger' onClick={()=>setShow(!show)}>{show? "Hide":"Show"}</button>
          {/* Used !show to reverse the current value */}
          {show && tasks.map((task)=> (
            <TaskCard key={task.id} /*info={info}*/ task={task} handleDelete={handleDelete}/>
          ))}
        </ul>
        {/* We added an unordered list and used a dynamic expression to display each item on the list
        We used the map function to access each element in the array */}
        <BoxCard result='success'>
          <p className='Title'>Lorem ipsum dolor sit.</p>
          <p className='Description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </BoxCard>
        <AlertCard result='warning'>
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe excepturi deleniti quo incidunt natus labore eveniet possimus obcaecati a dolor molestiae numquam, temporibus consectetur reprehenderit! Ex reprehenderit dolor at!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, aspernatur?</p>
        </AlertCard>
        <AlertCard result='danger'>
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe excepturi deleniti quo incidunt natus labore eveniet possimus obcaecati a dolor molestiae numquam, temporibus consectetur reprehenderit! Ex reprehenderit dolor at!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas molestias itaque, earum dolor reiciendis quasi facilis veritatis accusantium explicabo?</p>
          {/* Here we add children(p tags) in the AlertCard component. The children will be displayed dynamically from tasklist to the alertcard component */}
        </AlertCard>
        <div className='box alert'>
        </div>
    </section>
  )
}
