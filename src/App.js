import React from "react";
// import {  Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

// import "@material-tailwind/react/tailwind.css";
import './App.css';
// import SideBar from "./layouts/SideBar";

import DashAdmin from "./pages/DashAdmin/DashAdmin";
import Managers from "./pages/Managers/Managers";

// import SideBar from "./layouts/SideBar"
import NotFound from "./pages/DotFound/NotFound";
import Login from "./pages/Login/Login";

// require('dotenv').config()

function App() {
  return (

    <Router>
      <div className="">
        {/* <SideBar></SideBar> */}
        <Routes>
          <Route exact path="/"               element={<DashAdmin/>}/> 
          <Route exact path="/managers"               element={<Managers/>}/> 
          <Route exact path="/RESPO"               element={<RESPO/>}/> 
          <Route  path="/login"               element={<Login/>}/> 



          <Route  path="*"               element={<NotFound/>}/> 
        </Routes>  
      </div>
    </Router>
    

  );
}

export default App;