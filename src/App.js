import './App.css';
import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);

  function handleAdd(){
    setCount(count+1);
    console.log(count);
  }

  function handleSub(){
    setCount(count-1);
    console.log(count);
  }
  return(
    <div className="App">
      <div className='Box'>
        <p>{count}</p>
        <button onClick={handleAdd} className='add'>Add</button>
        <button onClick={handleSub} className='sub'>Sub</button>
      </div>
      <h1>Hello WOrld!</h1>
    </div>
  );
}

export default App;