import React, { useState } from 'react';
import classes from './TodoItem.module.css';
import { Checkbox } from '@mui/material';
import Button from '../UI/Button';
import { AiTwotoneEdit } from 'react-icons/ai'
import { MdDelete } from "react-icons/md";
import TodoEdit from './TodoEdit';


const TodoItem = (props) =>
{
  const [editStatus, setEditStatus] = useState(false);

  const editStatusHandler = () =>
  {
    setEditStatus(true);
  }

  const saveEditsHandler = () =>
  {
    setEditStatus(false);
  }

  return (
    <li className={classes['todo-item']}>
      {
        !editStatus ?
          <>
            <Checkbox onClick={props.onClick} checked={props.hasChecked} />
            <p className={props.isDone}>{props.text}</p>
            <div className={classes['box-btn']}>
              <Button onClick={editStatusHandler}><AiTwotoneEdit /></Button>
              <Button onClick={props.onRemove}><MdDelete /></Button>
            </div>
          </>
          : <TodoEdit onClick={saveEditsHandler} onState={props} />
      }
    </li>
  )
}

export default TodoItem