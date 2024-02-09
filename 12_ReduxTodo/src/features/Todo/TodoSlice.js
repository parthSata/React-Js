import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: 'Hello World'
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // it is use to create a new unique id
                text: action.payload
            }
            state.todos.push(todo)
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;

            // Find the index of the todo with the specified id
            const index = state.todos.findIndex(todo => todo.id === id);

            if (index !== -1) {
                // Create a copy of the todos array
                const updatedTodos = [...state.todos];

                // Update the text property of the todo at the found index
                updatedTodos[index] = {
                    ...updatedTodos[index],
                    text: text,
                };

                // Return the updated state
                return {
                    ...state,
                    todos: updatedTodos,
                };
            }
            //Practice Update 
        }, 
        

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, updateTodo, deleteTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer