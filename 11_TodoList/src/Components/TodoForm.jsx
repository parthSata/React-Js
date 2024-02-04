import React, { useState } from 'react'
import { useTodo } from '../Context'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, Completed: false })
        // Based on New Rule key and Pair Value
        // name are Same Then You are Write once  That is Possible
        // and id is Define in any one page  id: Date.now() like this

    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value) }
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default TodoForm
