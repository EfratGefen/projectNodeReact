import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import Login from "./login";
import YourTaskList from "./yourTaskList";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addTask, getUserList } from "../redux/actions";
import axios from 'axios';
function mapStateToProps(state) {
    return {
        usersList: state.users.usersList,
    };
}
export default connect(mapStateToProps)(function Entry(props) {
    const newNavigate = useNavigate();
    const { usersList, dispatch } = props;
    let FirstName = useRef('');
    let Password = useRef('');
    let flag = 1;
    const [flag1, SetFlag1] = useState(false);
    const connected = async () => {
        try {
            const response = await axios.get('http://localhost:5000/user');

            if (response.status == 200) {
                dispatch(getUserList(response.data));
                for (var i in response.data) {
                    if (flag == 1 && response.data[i].firstName == FirstName.current.value && response.data[i].password == Password.current.value) {
                        alert(`wellcome ${FirstName.current.value}`);
                        flag = 0;
                        debugger
                        newNavigate('/yourTaskList', { state: { userCurrent: Password.current.value } });
                    }
                }
                if (flag == 1) {
                    alert(`You not exsist`);
                    SetFlag1(true);
                    newNavigate('/login');
                }
            }
        }
        catch (error) {
            console.error(error);
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
                <h1>Connect</h1>
                <TextField inputRef={FirstName} id="standard-basic" label="First Name" variant="standard" color="info" /><br></br>
                <TextField inputRef={Password} id="standard-basic" label="Password" variant="standard" /><br /><br />
                <Button onClick={connected} variant="text">Connect</Button>
            </Box>

        </>
    );

})