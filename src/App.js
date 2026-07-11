import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';

function App(){
  const info="Random";
  const [tasks, setTasks] = useState([
          // {id: 1, name: "Record Lecture", completed: true}, 
          // {id: 12, name: "Edit Lecture", completed: false}, 
          // {id: 13, name: "Watch Lecture", completed: false}
        ]);

  return(
    <div className='App'>
      <Header/>
      <main>
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <TaskList title="Random" subtitle="Testing" info={info} tasks={tasks} setTasks={setTasks}/>
        {/* Added a title named random which I accessed in the TaskList component using props to display the title */}
        {/* Assigned the values for tasks and setTasks */}
        {/* put the sections in main to improve web structure */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;