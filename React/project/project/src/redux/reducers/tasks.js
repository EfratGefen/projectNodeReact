
import { produce } from 'immer';
const initialState = {
    taskType: [
    ],
    taskList: [
    ],
};
export default produce((state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            { state.taskList.push(action.payLoad) };
            break;
        case "DELETE_TASK":
            { 
                debugger
                const indexToDelete = state.taskList.findIndex(task => task.taskId == action.payLoad.taskId);
                      if (indexToDelete !== -1) {
                        state.taskList.splice(indexToDelete, 1);
                      } };
            break;
        case "GET_TASK_LIST":
            { state.taskList = action.payLoad };
            break;
        case "UPDATE_TASK":
            {
                const indexToEdit = state.taskList.findIndex(task => task.taskId === action.payload.taskId);
                if (indexToEdit !== -1) {
                  state.taskList[indexToEdit].description = action.payload.updatedDescription;
                }
                break;
            };
            break;
       

    }
}, initialState)