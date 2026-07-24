import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "./styles/global.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
// browser router provide routing context to entire react application
//  ,it change b/w diff component or page without fullpage reload,give smooth experience