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
            <Route path='/Logement' element={<Logement />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>   
    );
};

export default Router;