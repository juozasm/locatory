import React from 'react';
import styles from './Input.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

export default function Input({ className, ...rest }) {
  return <input {...rest} className={cx(styles.root, className)} />;
}

Input.propTypes = {
  className: PropTypes.string,
};

export function InputWithIcon({ iconSrc, className, ...rest }) {
  return (
    <div className={cx(styles.inputWrapper, className)}>
      <img className={styles.icon} src={iconSrc} alt="inputIcon" />
      <Input {...rest} />
    </div>
  );
}

InputWithIcon.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};
