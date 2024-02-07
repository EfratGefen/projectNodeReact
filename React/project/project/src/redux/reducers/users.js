import {produce} from 'immer';
//import { addUser } from "../redux/actions";
const initialState = {
    usersList:[
    ],
};
export default produce((state,action)=>{
    switch(action.type){
        case 'ADD_USER':
            {state.usersList.push(action.payLoad)}
            break;
        case "GET_USER_LIST":
            { state.usersList = action.payLoad };
            break;
    }
},initialState)