import Home from "./component/Home.js";
import './App.css';
import Navbar from './component/Navbar.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './component/Register.js';
import Login from "./component/Login.js";
import Movies from './component/Movies.js';


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
         <Route path ="/register" element={<Register/>}></Route>
        <Route path ="/login" element={<Login/>}></Route>
        <Route path ="/movies" element={<Movies/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;