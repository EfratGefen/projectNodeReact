import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../redux/actions";
import axios from "axios";
// import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}
export default connect(mapStateToProps)(function Task(props) {
    const newNavigate=useNavigate();
    const { currectTask, dispatch } = props;
    const del = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/task/${currectTask.taskId}`);
            debugger
            if (response.status == 200) {
                dispatch(deleteTask(currectTask));
                alert("the task successesfully delete");
                newNavigate('/yourTaskList',{ state: { userCurrent: currectTask.password } });
            }
        }
        catch(error){
            console.error(error);
        }
    };
    
    const edit=async()=>{
        try{
            const response=await axios.put(`http://localhost:5000/task/${currectTask.taskId}`)
            if (response.status == 200) {
                dispatch(deleteTask(currectTask,));
                alert("the task successesfully delete");
            }
        }
        catch(error){
            console.error(error);
        }
    }
   
    return (
        <>
            <h1>{currectTask.description}</h1>
            <h2>{currectTask.deadLine}</h2>
            <h3>{currectTask.name}</h3>
            <p></p>
            <button onClick={edit}>Edit</button>
            <button onClick={del}>Delete</button>
        </>
    )
})
