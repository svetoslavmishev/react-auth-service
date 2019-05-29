import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navigation } from './components/index';
import { Content } from './components/index';

function App() {

  //TODO 
  //# Provide snackbars
  return (
    <Fragment>
      <Navigation />
      <BrowserRouter >
        <Route path="/" component={Content} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
