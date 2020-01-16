import React from 'react';
import styles from './Header.module.scss';
import locatoryLogoSrc from 'assets/locatory.png';
import LogoutButton from '../LogoutButton';

export default function Header() {
  return (
    <div className={styles.root}>
      <img
        className={styles.logo}
        src={locatoryLogoSrc}
        alt="locatory.com logo"
      />
      <LogoutButton />
    </div>
  );
}
