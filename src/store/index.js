import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-Slice";

const localStorageMiddleware = ({ getState }) =>
{
    return next => action => 
    {
        const result = next(action);
        localStorage.setItem('todoList', JSON.stringify(getState()));
        return result;
    };
};

const reHydrateStore = () =>
{
    if (localStorage.getItem('todoList') !== null)
    {
        return JSON.parse(localStorage.getItem('todoList')); // re-hydrate the store
    }
};

const store = configureStore({
    reducer: todoSlice,
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(localStorageMiddleware),
})

export default store;