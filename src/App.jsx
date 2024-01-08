
import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'

function App() {

const [todos, setTodos]=useState([])

const addTodo=(todo)=>{
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
}
const updateTodo=(id , todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
}
const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((prevtodo)=>prev.id!==id))
}
const toggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo===id?{...prevTodo, completed:!prevTodo.completed}:prevTodo))
}
useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0){
    setTodos(todos)
  }
},[])
useEffect(()=>{
       localStorage.setItem("todos", JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        hello
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>

    </TodoProvider>
  )
}

export default App
