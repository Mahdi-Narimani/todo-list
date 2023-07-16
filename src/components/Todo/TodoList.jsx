import React, { useState } from 'react';
import classes from './TodoList.module.css';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { todoAction } from '@/store/todo-Slice';
import StatusButton from '../UI/TodoStatusButton';

const TodoList = () =>
{

  const item = useSelector(state => state.todo);

  const filterCompleted = item.filter(item => item.done === true);

  const filterActive = item.filter(item => item.done === false);

  const [todoStatus, setTodoStatus] = useState('All');

  const todoAllStatusHandler = () =>
  {
    setTodoStatus('All');
  }
  const todoActiveStatusHandler = () =>
  {
    setTodoStatus('Active');
  }
  const todoCompletedStatusHandler = () =>
  {
    setTodoStatus('Completed');
  }

  const dispatch = useDispatch();

  const deleteItemHandler = (id) =>
  {
    dispatch(todoAction.deleteItem(id))
  }

  const isCheckedHandler = (id) =>
  {
    dispatch(todoAction.doneItem(id))
  }

  return (
    <>
      <div className={classes['box-btn__status']}>
        <StatusButton
        focus={true}
          status={'All'}
          onClick={todoAllStatusHandler} />
        <StatusButton
          status={'Active'}
          onClick={todoActiveStatusHandler} />
        <StatusButton
          status={'Completed'}
          onClick={todoCompletedStatusHandler} />
      </div>

      <ul className={classes['todo-list']}>

        {
          todoStatus === 'All' ? item.map(item =>
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              isDone={item.done ? classes.done : ''}
              hasChecked={item.done}
              onClick={isCheckedHandler.bind(null, item.id)}
              onRemove={deleteItemHandler.bind(null, item.id)}
            />)

            : todoStatus === 'Completed' ? filterCompleted.map(item =>
              <TodoItem
                key={item.id}
                id={item.id}
                text={item.text}
                isDone={item.done ? classes.done : ''}
                hasChecked={item.done}
                onClick={isCheckedHandler.bind(null, item.id)}
                onRemove={deleteItemHandler.bind(null, item.id)}
            />)

            : todoStatus === 'Active' && filterActive.map(item =>
                <TodoItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  isDone={item.done ? classes.done : ''}
                  hasChecked={item.done}
                  onClick={isCheckedHandler.bind(null, item.id)}
                  onRemove={deleteItemHandler.bind(null, item.id)}
            />)
        }
      </ul>
    </>
  )
}

export default TodoList