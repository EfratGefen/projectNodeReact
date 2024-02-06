import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Task from "./task";
import Addtask from "./addtask";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { getTaskList } from "../redux/actions";
function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}
  
// var flag = 0;
export default connect(mapStateToProps)(function YourTaskList(props) {
    const newNavigate=useNavigate();
    debugger
    useEffect(()=> {
        GetYourTask()
    }, []);
    const [flag,SetFlag]=useState(false);
    const [Flag2, SetFlag2] = useState(false);
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
    // GetYourTask();
    // const mapTasks=(()=>{
    //     for(i in taskList)
    //     {
    //         if(taskList[i].password==userCurrent){
    //             SetFlag(true);
    //         }
    //         SetFlag(false);
    //     }
    // })
    const Set = (() => {
        // SetFlag2(!Flag2);
        newNavigate('/addtask');
    })
    return (
        <>
            {/* {mapTasks()} */}
            {taskList.map((currectTask)=>(
                <Task currectTask={currectTask}></Task>
            ))}
            {/* {SetFlag && <Task currectTask={taskList[i]}></Task>} */}
            <Button onClick={Set} variant="text">Add Task</Button>
            {/* {Flag2 && <Addtask ></Addtask>} */}
        </>
    )

})