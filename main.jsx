import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import { BrowserRouter } from "react-router-dom"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
// import AppCopy from './AppCopy.jsx'
// import Appcollage from './Appcollage.jsx' 

const root = createRoot(document.getElementById("root")); // Use createRoot directly
root.render(
  <StrictMode>
    <BrowserRouter> {/* This is the correct place to wrap the app with BrowserRouter */}
      <App />
      {/* <AppCopy/> */}
      {/* <Appcollage/> */}
    </BrowserRouter>
  </StrictMode>
);
