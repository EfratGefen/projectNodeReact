import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/login';
import Entry from './components/entry';
import YourTaskList from './components/yourTaskList';
import Task from './components/task';
import { Routes, Route } from 'react-router-dom';
import Addtask from './components/addtask';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Entry></Entry>}></Route>
          <Route path="/addtask" element={<Addtask></Addtask>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/yourTaskList" element={<YourTaskList></YourTaskList>}></Route>
        </Routes>
      </Provider>

    </div>
  );
}
export default App;
