import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Navigation } from './components/index';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter >
        <Navigation />
        <Routes/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
