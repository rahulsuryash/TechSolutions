import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./Components/Nav"
import './styles/App.scss'
import './styles/colors.scss'

import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';

import "./styles/mediaquery.scss"


function App() {
  return (
    <div >
      <Router>

        <Nav/>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services />} />


        </Routes>

        <Footer/>
      </Router>

    </div>
  );
}

export default App;
