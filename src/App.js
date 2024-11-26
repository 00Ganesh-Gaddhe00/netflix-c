import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './Screens/Homescreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser } from './features/userSlice';
import ProfileScreen from './Screens/ProfileScreen';


function App() {
const user= useSelector(selectuser)
const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userauth) => {
        if (userauth) {
           dispatch(login({
            uid: userauth.uid,
            email:userauth.email
           }))
        } else {
          dispatch(logout())
        }
    });
    return unsubscribe;
}, []);


  return (
    <div className="app">
      <Router>
        {!user?(
          <LoginScreen></LoginScreen>
        ):(
          <Routes>
           <Route path='/profile' element={<ProfileScreen/>}></Route>
          <Route path='/' element={<Homescreen/>}></Route>

        </Routes>
        )}
        
      </Router>
    </div>
  );
}

export default App;
