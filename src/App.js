import './App.css';
import React from 'react';
import HeroSectionPage from './pages/HeroSectionPage';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
   <Routes>
    <Route path='/' element={<HeroSectionPage />} />
   </Routes>
  );
}

export default App;
