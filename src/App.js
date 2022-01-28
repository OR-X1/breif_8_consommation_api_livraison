import React from "react";
// import {  Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

// import "@material-tailwind/react/tailwind.css";
import './App.css';
// import SideBar from "./layouts/SideBar";

import DashAdmin from "./pages/DashAdmin/DashAdmin";
import Managers from "./pages/Managers/Managers";

import SideBar from "./layouts/SideBar"

function App() {
  return (

    <Router>
      <div className="flex h-screen">
        <SideBar></SideBar>
        <Routes>
          <Route exact path="/"               element={<DashAdmin/>}/> 
          <Route exact path="/managers"               element={<Managers/>}/> 
        </Routes>  
      </div>
    </Router>
    

  );
}

export default App;