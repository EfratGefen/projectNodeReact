import * as React from 'react';
// import React from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions";
import axios from "axios";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}
export default connect(mapStateToProps)(function Task(props) {
    const newNavigate = useNavigate();
    const { currectTask, dispatch } = props;
    const del = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/task/${currectTask.taskId}`);
            if (response.status == 200) {
                dispatch(deleteTask(currectTask));
                alert("the task successesfully delete");
                newNavigate('/yourTaskList', { state: { userCurrent: currectTask.password } });
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    const edit = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/task/${currectTask.taskId}`)
            if (response.status == 200) {
                dispatch(updateTask(currectTask,currectTask.password));
                alert("the task successesfully upDate!");
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <>
 <Paper
      sx={{
        p: 2,
        margin: '3%',
        marginLeft:'38%',
        maxWidth: 300,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              {currectTask.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
              {currectTask.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currectTask.deadLine}
              </Typography>
            </Grid>
            <Grid item>
               <Stack direction="row" spacing={2} sx={{paddingLeft:'14%',}} >
                <Button onClick={del} color="inherit" variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button onClick={edit} color="inherit" variant="contained" endIcon={<BorderColorIcon />}>
                    Edit
                </Button>
            </Stack>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            {currectTask.taskId}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>


           
        </>
    )
})
