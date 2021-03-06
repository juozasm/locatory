import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({
  component: Component,
  ...rest
}) {
  const authenticated = useSelector(state => state.auth.token);

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType,
};
