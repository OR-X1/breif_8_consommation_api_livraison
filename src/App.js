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


import LoginResponsableLivraison from "./pages/ResponsableLivraison/Login";

import NotFound from "./pages/DotFound/NotFound";
import Livraisant from "./pages/ResponsableLivraison/Livraisant";
import ProtectedRouteResponsableLivraison from "./ProtectedRoute/ProtectedRouteResponsableLivraison";
import ProtectedRouteChauffeur from "./ProtectedRoute/ProtectedRouteChauffeur";
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
          <Route  path="/dashboard/admin"               element={<LoginAdmin/>}/> 

          <Route  path="/responsablelivraison"           element={<ProtectedRouteManager><ResponsableLivraison/></ProtectedRouteManager>}/>
          <Route  path="/chauffeur"                      element={<ProtectedRouteManager><Chauffeur/></ProtectedRouteManager>}/>
          <Route  path="/vehicule"                       element={<ProtectedRouteManager><Vehicule/></ProtectedRouteManager>}/>
          <Route  path="/dashboard/manager"               element={<LoginManager/>}/> 

          <Route  path="/livraisant"                       element={<ProtectedRouteResponsableLivraison><Livraisant/></ProtectedRouteResponsableLivraison>}/>
          <Route  path="/dashboard/responsableLivraison"               element={<LoginResponsableLivraison/>}/> 

          <Route  path="/disponiblelivraisant"                       element={<ProtectedRouteChauffeur><Livraisant/></ProtectedRouteChauffeur>}/>
          <Route  path="/mylivraisant"                       element={<ProtectedRouteChauffeur><Livraisant/></ProtectedRouteChauffeur>}/>
          <Route  path="/dashboard/chauffeur"               element={<LoginResponsableLivraison/>}/> 

          <Route  path="*"               element={<NotFound/>}/> 
        </Routes>  
      </div>
    </Router>
    

  );
}

export default App;