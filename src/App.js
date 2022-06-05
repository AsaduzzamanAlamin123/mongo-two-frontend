
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './componant/AddUser/AddUser';
import Home from './componant/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from './componant/Update/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/adduser' element={<AddUser></AddUser>}></Route>
        <Route path='/ident/:idi' element={<Update></Update>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
