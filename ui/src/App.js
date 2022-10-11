import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Root from './components/Root';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
     <div className="container mt-5">
     <ToastContainer position="top-center" />
      <Routes>
        <Route exact path='/' element={<Root/>}/>
        <Route path='/addUser' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
