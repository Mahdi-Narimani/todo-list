import React from 'react'
import FormAddItem from '../Todo/FormAddItem'
import TodoList from '../Todo/TodoList';
import classes from './Main.module.css';

const Main = () =>
{
  return (
    <main className={classes.main}>
      <section className={classes.todo}>
        <FormAddItem />
        <TodoList />
      </section>
    </main>
  )
}

export default Main