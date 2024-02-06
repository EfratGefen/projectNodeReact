import {produce} from 'immer';
//import { addUser } from "../redux/actions";
const initialState = {
    usersList:[
        // {firstName:'dvori',lastName:'mako',tel:"0556772035",email:'dvora2035@gmail.com',password:123456},
        // {firstName:'hadas',lastName:'alfasi',tel:"0548402064",email:'hadas2064@gmail.com',password:111222},
        // {firstName:'efrat',lastName:'gefen',tel:"0527130843",email:'efrat0843@gmail.com',password:987654},
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