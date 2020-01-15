import React from 'react';
import styles from './LoginButton.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default function LoginButton({ className, ...rest }) {
  return (
    <button {...rest} className={cx(styles.root, className)}>
      Log In
    </button>
  );
}

LoginButton.propTypes = {
  className: PropTypes.string,
};
