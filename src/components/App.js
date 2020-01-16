import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './common/ProtectedRoute';
import UnauthorizedRoute from './common/UnauthorizedRoute';
import Locations from './pages/Locations';
import Login from './pages/Login/Login';
import { useDispatch } from 'react-redux';
import { setToken } from 'store/modules/auth';

export default function App() {
  const token = window.localStorage.getItem('token');
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Locations} />
        <UnauthorizedRoute exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
