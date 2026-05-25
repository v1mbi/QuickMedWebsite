import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar';
import FAQ from './faq';
import Blog from './blog';
import ContactPage from './contact';
import HealthInsurance from './insurance/healthInsurance';
import FuneralInsurance from './insurance/funeralInsurance';
import AssetInsurance from './insurance/assetInsurance';
import Home from "./home";


export default function Router() {
  return (
    <div className="flex flex-col items-end w-screen space-y-20 overflow-y-hidden"><Navbar /><h1>demo</h1><Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/insurance/health" element={<HealthInsurance />} />
      <Route path="/insurance/funeral" element={<FuneralInsurance />} />
      <Route path="/insurance/asset" element={<AssetInsurance />} />
      <Route path="/insurance/" element={<h1 className="w-full text-5xl text-center text-gray-800">Insurance Page</h1>} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes></div>
    
  );
}