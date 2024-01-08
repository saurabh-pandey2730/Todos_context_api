
import { useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'

function App() {

const [todos, setTodos]=useState([])
  return (
    <TodoProvider>
    
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
