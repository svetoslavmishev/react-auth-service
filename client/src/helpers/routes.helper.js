import React from 'react';
import { Route } from 'react-router-dom';


const renderRoutes = (route) => (
  <Route
    key={route.path}
    path={route.path}
    component={route.component}
    {...route}
  />
);

export default renderRoutes;