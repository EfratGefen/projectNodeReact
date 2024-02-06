export function addUser(newUser) {
  return { type: "ADD_USER", payLoad: newUser };
}
export function addTask(newTask)
{
  return {type:"ADD_TASK",payLoad:newTask};
}
export function deleteTask(Task)
{
  return {type:"DELETE_TASK",payLoad:Task};
}
export function getTaskList(TaskList)
{
  return {type:"GET_TASK_LIST",payLoad:TaskList};
}
export function getUserList(UserList)
{
  return {type:"GET_USER_LIST",payLoad:UserList};
}
export function updateTask(taskId,updatedDescription)
{
  return {type:"UPDATE_TASK",payLoad:{taskId,updatedDescription}};
}
