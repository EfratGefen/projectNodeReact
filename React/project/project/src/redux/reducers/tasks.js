
import { produce } from 'immer';
const initialState = {
    taskType: [
        // { taskTypeId: 1, taskTypeName: 'משימה' },
        // { taskTypeId: 2, taskTypeName: 'באג' }
    ],
    taskList: [
        // password: Password.current.value,
        // taskId: TaskId.current.value,
        // taskTypeId: TaskTypeId.current.value,
        // name: Name.current.value,
        // description: Description.current.value,
        // deadLine: Deadline.current.value
        // { password: 123456,   taskId: 1, taskTypeId: 1,name: "dvori",description: "create task component", deadLine: '02-08-2004' },
        // { password: 111222, taskId: 2, taskTypeId: 2, name: "hadas", description: "to debbug", deadLine: '02-10-2004' }
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