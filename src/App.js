import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout  from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import GetUsers from './components/GetUsers/GetUsers';

function App() {

const [users, setUsers] = useState([]);
const getUsers = async() => {
try
{
  const response = await api.get("/users");
  console.log(response.data);
  setUsers(response.data);
}
catch(err)
{
  console.log(err);
}

}

useEffect( () => {
  getUsers();
},[])



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home users={users} />} ></Route>
          <Route path="/users" element={<GetUsers users={users} />} ></Route>
          
        </Route>
      </Routes>

    </div>
  );
}

export default App;
