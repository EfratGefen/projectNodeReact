import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Task from "./task";
import Addtask from "./addtask";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { getTaskList } from "../redux/actions";
function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}
  
export default connect(mapStateToProps)(function YourTaskList(props) {
    const newNavigate=useNavigate();
    useEffect(()=> {
        GetYourTask()
    }, []);
    const { taskList, dispatch } = props;
    const location = useLocation();
    const userCurrent = location.state.userCurrent;
    var i;
    const GetYourTask = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/task/${userCurrent}`);
             if (response.status==200) {
                dispatch(getTaskList(response.data));
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    const Set = (() => {
        newNavigate('/addtask');
    })
    return (
        <>
            {taskList.map((currectTask)=>(
                <Task currectTask={currectTask}></Task>
            ))}
            <Button onClick={Set} sx={{color: 'black'}} variant="text">Add Task</Button>
        </>
    )

})