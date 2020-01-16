import React from 'react';
import styles from './List.module.scss';
import PropTypes from 'prop-types';

export default function List({ children }) {
  return <div className={styles.root}>{children}</div>;
}

List.propTypes = {
  children: PropTypes.node,
};
