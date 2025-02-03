import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Whatsapp from './Images/Whatsapp.png';
import Top from './Images/Top.png';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Nit from './Components/Nit/Nit';
import Ply from './Products/Ply/Ply';
import ThreePly from './Products/Ply/3Ply/ThreePly';
import FourPly from './Products/Ply/4Ply/FourPly';
import MultiPly from './Products/Ply/MultiPly/MultiPly';
import PInsulation from './Products/PInsulation/PInsulation';
import Insulation1 from './Products/PInsulation/Insulation1/Insulation1';
import Insulation2 from './Products/PInsulation/Insulation2/Insulation2';
import Insulation3 from './Products/PInsulation/Insulation3/Insulation3';
import Metalized from './Products/Metalized/Metalized';
import Barrier from './Products/Barrier/Barrier';
import Barrier1 from './Products/Barrier/Barrier1/Barrier1';
import Food from './Products/Food/Food';
import Food1 from './Products/Food/Food1/Food1';
import Food2 from './Products/Food/Food2/Food2';
import Food3 from './Products/Food/Food3/Food3';
import Food4 from './Products/Food/Food4/Food4';
import Food5 from './Products/Food/Food5/Food5';
import Faqs from './Resources/Faqs/Faqs';
import Gallery from './Resources/Gallery/Gallery';

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Ply" element={<Ply />} />
        <Route path="/ThreePly" element={<ThreePly />} />
        <Route path="/FourPly" element={<FourPly />} />
        <Route path="/MultiPly" element={<MultiPly />} />
        <Route path="/Insulation" element={<PInsulation />} />
        <Route path="/Insulation1" element={<Insulation1 />} />
        <Route path="/Insulation2" element={<Insulation2 />} />
        <Route path="/Insulation3" element={<Insulation3 />} />
        <Route path="/Metalized" element={<Metalized />} />
        <Route path="/Barrier" element={<Barrier />} />
        <Route path="/Barrier1" element={<Barrier1 />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Food1" element={<Food1 />} />
        <Route path="/Food2" element={<Food2 />} />
        <Route path="/Food3" element={<Food3 />} />
        <Route path="/Food4" element={<Food4 />} />
        <Route path="/Food5" element={<Food5 />} />
        <Route path="/Glr" element={<Gallery />} />
        <Route path="/Faqs" element={<Faqs />} />
      </Routes>
      <Footer />
      <Nit />
      <div className="Whatsapp">
        <div className="whts-img">
          <a
            href="https://wa.me/9023407993"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon"
          >
            <img src={Whatsapp} className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="Topimg">
        <div className="TP-Img" onClick={scrollToTop}>
          <img src={Top} className="img-fluid" alt="Scroll to top" />
        </div>
      </div>
    </Router>
  );
}
