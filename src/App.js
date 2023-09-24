import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout  from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import GetUsers from './components/getUsers/GetUsers';
import Units from './components/units/Units';
import CreatUnit from './components/units/CreateUnit';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/users" element={<GetUsers />} ></Route>
          <Route path="/units" element={<Units />} ></Route>
          <Route path="/createUnit" element={<CreatUnit />} ></Route>
          
        </Route>
      </Routes>

    </div>
  );
}

export default App;
