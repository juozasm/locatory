import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem({ children }) {
  return <div>{children}</div>;
}

ListItem.propTypes = {
  children: PropTypes.node,
};
