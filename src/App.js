import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import NavBar from './components/NavBar';
// import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import Login from './components/Login'

import ManagerAssets from './components/ManagerAssets'
// import { useContext } from 'react';
// import { UserContext } from './custom-hooks/user';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const { user } = useContext(UserContext)
  return (
    <BrowserRouter>
      <div className='App'>
      {/* <NavBar /> */}
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'/home'}  element={<Home/>} exact/>
        <Route path={'/dashboard'} element={<Dashboard/>} />
        <Route path={'/login'} element={<Login/>}/>

       
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
