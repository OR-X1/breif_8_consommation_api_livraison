import React from "react";
// import { Redirect, Route } from "react-router-dom";
import { Navigate, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

function ProtectedRouteResponsableLivraison({children}) {
    const token = localStorage.getItem('auth_token');

    var decoded = jwt_decode(token);

    console.log(token);
    console.log(decoded);
    
    if( !token && !token.role === "responsableLivraison")return  <Navigate to="/login"/>
    return  children

}

export default ProtectedRouteResponsableLivraison;