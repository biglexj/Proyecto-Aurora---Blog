import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DarkMode from "./components/dark-mode/DarkMode";
import Home from './pages/home/home';
import Login from './pages/Auth/login/login';
import Register from './pages/Auth/register/register';
import Terms from './pages/Terms/Terms';
import BJProducciones from './pages/bj-producciones/bj-producciones';
import Services from './pages/services/services';
import Developer from "./pages/biglex-dev/biglex-dev";

import BiglexJ from './pages/home/popipoo/pages/biglexj';
import BiglexJProducciones from './pages/home/popipoo/pages/biglexpe';
import BiglexDeveloper from './pages/home/popipoo/pages/biglexdev';
import BiglexLive from './pages/home/popipoo/pages/biglexlive';
import BiglexGames from './pages/home/popipoo/pages/biglexgames';
import ElyVtuber from './pages/home/popipoo/pages/ely_vtuber';
import MikuAndina from './pages/home/popipoo/pages/miku-andina';

import Template from './pages/home/popipoo/pages/template';
import TemplatePerfil from './pages/home/popipoo/pages/template_perfil';

const App = () => {
  return (
    <>
      <DarkMode />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terminos-y-condiciones" element={<Terms />} />
          <Route path="/bj-producciones" element={<BJProducciones />} />
          <Route path="/services" element={<Services />} />
          <Route path="/biglex-dev" element={<Developer />} />

          <Route path="/biglexj" element={<BiglexJ />} />
          <Route path="/biglexpe" element={<BiglexJProducciones />} />
          <Route path="/biglexdev" element={<BiglexDeveloper />} />
          <Route path="/biglexlive" element={<BiglexLive />} />
          <Route path="/biglexjgames" element={<BiglexGames />} />
          <Route path="/ely_vtuber" element={<ElyVtuber />} />
          <Route path="/miku-andina" element={<MikuAndina />} />

          <Route path="/template" element={<Template />} />
          <Route path="/template_perfil" element={<TemplatePerfil />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
