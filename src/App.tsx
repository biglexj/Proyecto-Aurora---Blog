import React from "react";
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DarkMode from "@utils/DarkMode";
import Home from './pages/Home';
import Login from './modules/Auth/login/login';
import Register from './modules/Auth/register/register';
import Terms from './modules/Terms';
import BJProducciones from './pages/bj-producciones/bj-producciones';
import Services from './pages/services/services';
import Developer from "./pages/biglex-dev/biglex-dev";

import BiglexJ from './modules/Channels/pages/biglexj';
import BiglexJProducciones from './modules/Channels/pages/biglexpe';
import BiglexDeveloper from './modules/Channels/pages/biglexdev';
import BiglexLive from './modules/Channels/pages/biglexlive';
import BiglexGames from './modules/Channels/pages/biglexgames';
import ElyVtuber from './modules/Channels/pages/ely_vtuber';
import MikuAndina from './modules/Channels/pages/miku-andina';

import Template from './modules/Channels/pages/template';
import TemplatePerfil from './modules/Channels/pages/template_perfil';

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
