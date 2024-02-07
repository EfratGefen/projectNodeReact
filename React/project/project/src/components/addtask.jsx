import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actions";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}
export default connect(mapStateToProps)(function Addtask(props) {
    const { taskList, dispatch } = props;
    let Password = useRef('');
    let TaskId = useRef('');
    let TaskTypeId = useRef('');
    let Name = useRef('');
    let Description = useRef('');
    let Deadline = useRef('');
    const newNavigate=useNavigate();

    useEffect(function () {
    }, [, taskList]);

    const addtask = async () => {
        try {
            const newTask = {
                password: Password.current.value,
                taskId: TaskId.current.value,
                typeTaskId: TaskTypeId.current.value,
                name: Name.current.value,
                description: Description.current.value,
                deadline: Deadline.current.value
            }
            const response = await axios.post('http://localhost:5000/task', newTask);
            if (response.status == 200) {
                dispatch(addTask(newTask));
                alert(`the task: ${Description.current.value} added`);
                newNavigate('/yourTaskList',{state: { userCurrent: Password.current.value } })
            }
        }
        catch (error) {
            console.error(error)
        }

    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch', color: 'black', fontFamily: '' },
                    alignItems: 'center',
                    padding: "3%",
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>Task:</h1>
                
                <TextField inputRef={Password} id="standard-basic" label="Password" variant="standard" /><br></br>
                <TextField inputRef={TaskId} id="standard-basic" label="TaskId" variant="standard" /><br></br>
                <TextField inputRef={TaskTypeId} id="standard-basic" label="TaskTypeId" variant="standard" /><br />
                <TextField inputRef={Name} id="standard-basic" label="Name" variant="standard" /><br />
                <TextField inputRef={Description} id="standard-basic" label="Description" variant="standard" /><br />
                <TextField inputRef={Deadline} id="standard-basic" label="Deadline" variant="standard" /><br />
                <Button onClick={addtask} variant="text">ADD</Button>
            </Box>
        </>
    )
})