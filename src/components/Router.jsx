import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Logement from '../pages/Logement';
import ErrorPage from '../pages/ErrorPage';

const Router = () => {
    return (
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path="/logements/:id" element={<Logement />} />
        </Routes>   
    );
};

export default Router;