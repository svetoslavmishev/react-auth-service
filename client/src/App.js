import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Navigation } from './components/index';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
