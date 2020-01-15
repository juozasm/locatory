import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProtectedRoute({
  component: Component,
  ...rest
}) {
  const authenticated = true;

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
  component: PropTypes.element,
};
