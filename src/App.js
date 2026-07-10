import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';

function App(){
  const info="Random";

  return(
    <div className='App'>
      <Header/>
      <AddTask/>
      <TaskList title="Random" subtitle="Testing" info={info}/>
      {/* Added a title named random which I accessed in the TaskList component using props to display the title */}
      <Footer/>
    </div>
  );
}

export default App;