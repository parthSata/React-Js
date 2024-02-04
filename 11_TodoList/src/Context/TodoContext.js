import { useContext , createContext } from "react";

export const TodoContext = createContext({

    todo:[{
        id: 1,
        todo: "Todo Message",
        Completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (todo,id,) =>{},
    deleteTodo: (id,) =>{},
    toggleTodo: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider