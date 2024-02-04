import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import { TodoProvider } from './Context'
import { useState, useEffect } from 'react'

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo])
  }
  const updateTodo = (id, todo) => {
    setTodo((prevTodo) => prevTodo.map((prev) => (prev.id === id ? todo : prevTodo)))
  }
  const deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }
  const toggleTodo = (id) => {
    setTodo((prevTodo) => prevTodo.map((prev) => prev.id === id ? { ...prev, Completed: !prev.Completed } : prev))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])

  useEffect(() => {
    const todos = localStorage.setItem('todos', JSON.stringify(todo))

  }, [todo])

  return (
    <TodoProvider value={{ addTodo, todo, updateTodo, deleteTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
