import './App.css';
import Todo from './components/Todo';
import Input from './components/Input'
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const displayTask = (task, i) => {
    return <Todo text={task.text} checked={task.checked} index={i} key={i} deleteTask={deleteTask} checkTask={checkTask} />
  }

  const deleteTask = (id) => {
    setTasks([
      ...tasks.slice(0,id),
      ...tasks.slice(id+1)
    ]);
    console.log(id);
  }

  const checkTask = (id) => {
    console.log(id);
    tasks[id].checked = !tasks[id].checked;
    setTasks([
      ...tasks.slice(0,id),
      tasks[id],
      ...tasks.slice(id+1)
    ]);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Input tasks={tasks} setTasks={setTasks} />
      <div id='tasks'>
        {
          tasks.map(displayTask)
        }
        </div>
    </div>
  );
}

export default App;
