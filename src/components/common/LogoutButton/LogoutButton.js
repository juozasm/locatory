import React, { useCallback } from 'react';
import { ReactComponent as LogoutSVG } from 'assets/ico-logout.svg';
import styles from './LogoutButton.module.scss';
import { logout as logoutAction } from 'store/modules/auth';
import { useDispatch } from 'react-redux';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    window.localStorage.removeItem('token');
    dispatch(logoutAction());
  }, [dispatch]);
  return (
    <button onClick={logout} className={styles.root}>
      <LogoutSVG className={styles.logo} />
      Logout
    </button>
  );
}
