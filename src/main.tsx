// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'; 
import './index.css';
import Home from './pages/Home.tsx';
import Bibliography from './pages/Bibliography.tsx';
import Gallery from './pages/Gallery.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter basename="/eng-105/">
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="bibliography" element={<Bibliography />} />
      <Route path="gallery" element={<Gallery />} />
    </Route>
  </Routes>
</BrowserRouter>
);
