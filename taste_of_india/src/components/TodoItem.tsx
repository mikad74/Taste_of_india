import React from 'react';
import {Task} from './TodoList'

type TodoItemArgs = {
  task: Task,
  deleteTask: (id: string) => void,
  toggleCompleted: (id: string) => void,
}

function TodoItem({ task, deleteTask, toggleCompleted}: TodoItemArgs) {
  function handleChange() {
    toggleCompleted(task.id);
  }
 
 return (
   <div className="todo-item">
     <input 
       type="checkbox"
       checked={task.completed}
       onChange={handleChange}
     />
     <p className="item-text">{task.text}</p>
     <button onClick={() => deleteTask(task.id)}>
       X
     </button>
   </div>
 );
}
export default TodoItem;
