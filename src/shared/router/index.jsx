import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import About from "../../pages/About";
import Afisha from "../../pages/Afisha";
import FilmPage from '../../pages/FlimPage';
import BarGrill from '../../pages/BarGrill';



function KekRouter() {
  return ( 
      <Routes>
        <Route path="/about" element={<About/> } />
        <Route exact path="/afisha" element={<Afisha/> } />
        <Route exact path="/afisha/:id" element={<FilmPage/> } />
        <Route path="/bargrill" element={<BarGrill/>} />
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes> 
  );
}

export default KekRouter;
