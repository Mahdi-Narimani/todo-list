import classes from './TodoStatusButton.module.css';

const TodoStatusButton = (props) =>
{
    return (
        <button
            autoFocus = {props.focus}
            className={classes['btn-status']}
            onClick={props.onClick}>
            {props.status}
        </button>
    )
}

export default TodoStatusButton