import React from 'react';
import styles from './List.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default function ListRow({ isHeader = false, children }) {
  return (
    <div className={cx(styles.row, isHeader && styles.header)}>
      {children}
    </div>
  );
}

ListRow.propTypes = {
  isHeader: PropTypes.bool,
  children: PropTypes.node,
};
