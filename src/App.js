import React from 'react';
import './App.css';
import "./Main/Navbar/Navbar.css";
import "./Main/Footer/Footer.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Main/Footer/Footer';
import Navbar from './Main/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Si from './Pages/Dropdwn/Si';
import Pi from './Pages/Dropdwn/Pi';
import Is from './Pages/Dropdwn/Is';
import PnM from './Pages/Dropdwn/PnM';

function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <Navbar /> {/* Navbar inside the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/si" element={<Si />} />
        <Route path="/pi" element={<Pi />} />
        <Route path="/is" element={<Is />} />
        <Route path="/pnm" element={<PnM />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
