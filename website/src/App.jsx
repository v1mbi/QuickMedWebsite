import React from 'react';
import Navbar from './components/navbar';
import Router from './pages/router';
import { HelmetProvider } from "react-helmet-async";


function App() {
 
  return (<HelmetProvider><Router /></HelmetProvider>
   
  );
}

export default App;