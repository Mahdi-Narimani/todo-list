import React, { useState } from 'react';
import classes from './TodoEdit.module.css';
import { useDispatch } from 'react-redux';
import { todoAction } from '@/store/todo-Slice';

const TodoEdit = (props) =>
{
    const item = props.onState;
    
    const [editState, setEditState] = useState(item.text);
    const dispatch = useDispatch();


    const editStateHandler = (e) =>
    {
        setEditState(e.target.value);
    }

    const saveAndEndEditsHandler = () =>
    {
        dispatch(todoAction.editItem({id:item.id, text:editState}));
        props.onClick()
        console.log(item);
    }


    return (
        <div className={classes['edit-box']}>
            <button
                className={classes['edit-btn']} onClick={saveAndEndEditsHandler}>
                save
            </button>
            <input className={classes['edit-input']} value={editState}
                onChange={editStateHandler} />
        </div>
    )
}

export default TodoEdit