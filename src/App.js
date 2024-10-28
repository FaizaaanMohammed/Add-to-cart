import logo from './logo.svg';
import './App.css';
import Navbar from './Common/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addcart from './Common/Addcart';
import Home from './Common/Home';

function App() {
  return (
    <>
     
     <Router>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Addcart/>}/>
     </Routes>
     </Router>
    </>
  );
}

export default App;
