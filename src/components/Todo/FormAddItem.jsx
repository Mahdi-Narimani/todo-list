import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { IoMdAddCircle } from "react-icons/io";
import classes from './FormAddItem.module.css';
import { useDispatch } from 'react-redux';
import { todoAction } from '@/store/todo-Slice';


const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#fff',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&:before, &:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            }
        },
    });

const FormAddItem = () =>
{

    const outerTheme = useTheme();
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const textTodoHandler = (e) =>
    {
        setTodo(e.target.value);
    }

    const addItemHandler = (e) =>
    {
        e.preventDefault();
        if (todo.trim().length !== 0)
        {
            dispatch(todoAction.addItem(todo));
            if (e.keyCode === 13)
            {
                dispatch(todoAction.addItem(todo));
            }
            setTodo('');
        }

        return;
    }


    return (
        <form className={classes.form} onSubmit={addItemHandler}>

            <Stack
                direction="row"
                spacing={2}
                className={classes['add-btn']}>
                <Button
                    variant="outlined"
                    startIcon={<IoMdAddCircle />}
                    onClick={addItemHandler}
                >
                    Add Item
                </Button>
            </Stack>

            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '39.5ch' }
                }}
                noValidate
                autoComplete="off"

            >
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                        id="filled-basic"
                        label="Add New Item"
                        variant="filled"
                        className={classes.input}
                        value={todo}
                        onChange={textTodoHandler}
                        autoFocus
                    />

                </ThemeProvider>
            </Box>
        </form >
    )
}

export default FormAddItem