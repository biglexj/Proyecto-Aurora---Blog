import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Login from './pages/Auth/login/login';
import Register from './pages/Auth/register/register';
import Terms from './pages/Terms/Terms';
import BJProducciones from './pages/bj-producciones/bj-producciones';
import Services from './pages/services/services';
import Developer from "./pages/biglex-dev/biglex-dev";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terminos-y-condiciones" element={<Terms />} />
        <Route path="/bj-producciones" element={<BJProducciones />} />
        <Route path="/services" element={<Services />} />
        <Route path="/biglex-dev" element={<Developer />} />
      </Routes>
    </Router>
  );
};

export default App;
