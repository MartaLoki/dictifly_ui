import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import GetUsers from './components/getUsers/GetUsers';
import Units from './components/units/Units';
import CreatUnit from './components/units/CreateUnit';
import CreateDictionaryItem from './components/dictionary/CreateDictionaryItem';
import DictionaryItems from './components/dictionary/DictionaryItems';
import Test from './components/test/Test';
function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/users" element={<GetUsers />} ></Route>
          <Route path="/units" element={<Units />} ></Route>
          <Route path="/createUnit" element={<CreatUnit />} ></Route>
          <Route path="/createDictionaryItem" element={<CreateDictionaryItem />} ></Route>
          <Route path="/dictionaryItems" element={<DictionaryItems />} ></Route>
          <Route path="/test/:id" element={<Test />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
