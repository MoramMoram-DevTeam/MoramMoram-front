import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import './reset.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import InfoCommunity from 'pages/community/InfoCommunity';
import Main from 'pages/Main';
import ApplicationFoam from 'pages/matching/ApplicationFoam';
import InfoWriting from 'pages/community/InfoWriting';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/app" element={<ApplicationFoam />} />
        <Route path="/community-info" element={<InfoCommunity />} />
        <Route path="/community-write" element={<InfoWriting />} />

      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
