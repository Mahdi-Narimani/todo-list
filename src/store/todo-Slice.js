'use client'

const { createSlice } = require("@reduxjs/toolkit");

const initialState = { todo: [] };

const todoReducer = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {

        addItem: (state, action) =>
        {
            return {
                ...state,
                todo: [
                    ...state.todo,
                    { id: Date.now(), text: action.payload, done: false }
                ]
            }
        },

        deleteItem: (state, action) =>
        {
            const id = action.payload;
            const newTodo = state.todo.filter(item => item.id !== id);
            return {
                ...state,
                todo: newTodo
            };
        },

        editItem: (state, action) =>
        {
            const { id, text } = action.payload;
            let item = state.todo.find(item => item.id === id);
            item.text = text;

            state.todo.filter(item => item.id !== id);

            // return {
            //     ...state,
            //     todo: [
            //         ...newTodo,
            //         item
            //     ]
            // }

        },

        doneItem: (state, action) =>
        {
            const id = action.payload;
            let item = state.todo.find(item => item.id === id);
            item.done = !item.done;

            state.todo.filter(item => item.id !== id);

            // return {
            //     ...state,
            //     todo: [
            //         ...newTodo,
            //         item
            //     ]
            // }
        }
    }
});

export const todoAction = todoReducer.actions;
export default todoReducer.reducer;