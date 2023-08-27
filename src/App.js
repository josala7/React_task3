import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./component/navbar/Navbar";
import Card from "./component/productcards/Cards";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Auth/Login/Login'
import Register from './component/Auth/Register/Register';
import Contact from './component/Contact us/Contact';
import About from './component/About me/About';
import Footer from './component/Footer/Footer';
//import UserSettings from './component/UserSettings/Usersetting';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Footer" element={<Footer />} />
          {/* //<Route path="/userSettings" element={<UserSettings />} /> */}
        </Routes>

        <br /> <br /><br />

        <Footer />
      </Router>
    </>
  );
};

export default App;