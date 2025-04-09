import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'
import { db } from '../firebase' 

export type Task = {
  id: string,
  menu_id: number,
  text: string,
  completed: boolean
}

function TodoList(){
  const [tasks, setTasks] = useState<Task[]>([
  ]);
  const [input, setInput] = useState("")
  const [text, setText] = useState('');

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const fetchedTasks = snapshot.docs.map(doc => 
        ({
        id: doc.id,
        menu_id: doc.data().menu_id,
        text: doc.data().text,
        completed: doc.data().completed
      }))
      // console.log(fetchedTasks[0])
      setTasks(fetchedTasks)
    });
    return () => unsub();
  }, []);


  const addTask = async (text: string) => {
    if (text.trim() === "") return;
    await addDoc(collection(db, "tasks"), {
      id: Date.now(),
      text: text,
      completed: false,
      menu_id: 1
    })
    setText("")
  }

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id))
  }

  // function deleteTask(id: string){
  //   setTasks(tasks.filter(task => task.id !== id));
  // }

  function toggleCompleted(id: string){
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      } else {
        return task
      }
    }));
  }
  return (
    <div className="todo-list">
    {tasks.map(task => (
      <TodoItem
      key = {task.id}
      task = {task}
      deleteTask = {deleteTask}
      toggleCompleted={toggleCompleted}
      />
    ))}
    <input value = {text}
      onChange={e => setText(e.target.value)}
    />
    <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
}

export default TodoList
