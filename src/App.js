import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import './App.css';

import ProtectedRouteAdmin from "./ProtectedRoute/ProtectedRouteAdmin";
import DashAdmin from "./pages/DashAdmin/DashAdmin";
import Managers from "./pages/DashAdmin/Managers";
import LoginAdmin from "./pages/DashAdmin/Login";

import ProtectedRouteManager from "./ProtectedRoute/ProtectedRouteManager";
import ResponsableLivraison from "./pages/Managers/ResponsableLivraison";
import Chauffeur from "./pages/Managers/Chauffeur";
import Vehicule from "./pages/Managers/Vehicule";
import LoginManager from "./pages/Managers/Login";

import NotFound from "./pages/DotFound/NotFound";
// require('dotenv').config()
// import axios from "axios";

// axios.defaults.withCredentials = true;


function App() {
  return (

    <Router>
      <div className="h-screen">
        {/* <SideBar></SideBar> */}
        <Routes>
          <Route  path="/"               element={<ProtectedRouteAdmin><DashAdmin/></ProtectedRouteAdmin>}/>
          <Route  path="/managers"               element={<ProtectedRouteAdmin><Managers/></ProtectedRouteAdmin>}/>
          <Route  path="/dashboard"               element={<LoginAdmin/>}/> 

          <Route  path="/responsablelivraison"           element={<ProtectedRouteManager><ResponsableLivraison/></ProtectedRouteManager>}/>
          <Route  path="/chauffeur"                      element={<ProtectedRouteManager><Chauffeur/></ProtectedRouteManager>}/>
          <Route  path="/vehicule"                       element={<ProtectedRouteManager><Vehicule/></ProtectedRouteManager>}/>
          <Route  path="/dashboardmanager"               element={<LoginManager/>}/> 


          <Route  path="*"               element={<NotFound/>}/> 
        </Routes>  
      </div>
    </Router>
    

  );
}

export default App;