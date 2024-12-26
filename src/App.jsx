import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';

const App = () => (
  <>
    <Navbar />
    {/* <Home /> */}
    
    <Register />
    
    <Login />
    <Footer />


  </>
);


export default App
