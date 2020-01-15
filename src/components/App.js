import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ProtectedRoute from './common/ProtectedRoute';
import Locations from './pages/Locations';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Locations} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
