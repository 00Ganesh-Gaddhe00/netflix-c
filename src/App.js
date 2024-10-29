import React from 'react';
import './App.css';
import Homescreen from './Screens/Homescreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';

function App() {

  const user =null
  return (
    <div className="app">
      <Router>
        {!user?(
          <LoginScreen></LoginScreen>
        ):(
          <Routes>
     
          <Route path='/' element={<Homescreen/>}></Route>

        </Routes>
        )}
        
      </Router>
    </div>
  );
}

export default App;
