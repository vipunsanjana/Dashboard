import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

import Register from './components/Register/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

 
function App(){
 
        return (

          
          <Router>
          <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          <Route exact path="/Dashboard" element={<Dashboard/>}/>
         
          </Routes>
          <Navbar />
        
        </Router>


          

        

        );
    }
  
export default App