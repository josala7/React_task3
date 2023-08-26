import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./component/navbar/Navbar";
import Card from "./component/productcards/Cards";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Auth/Login/Login'
import Register from './component/Auth/Register/Register';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;