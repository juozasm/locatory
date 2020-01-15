import React, { useReducer, useCallback } from 'react';
import styles from './Login.module.scss';
import logo from '../../../assets/sensus-pro.png';
import { InputWithIcon } from '../../common/Input';
import lockSVG from '../../../assets/ico-lock.svg';
import userSVG from '../../../assets/ico-username.svg';
import LoginButton from '../../common/LoginButton';
import cx from 'classnames';
import useFormValidation from '../../../utils/useFormValidation';

const initialState = {
  loggingIn: false,
  username: '',
  password: '',
};

export const loginReducer = (state, action) => {
  const { type, name, value } = action;
  switch (type) {
    case 'HANDLE_INPUT':
      return {
        ...state,
        [name]: value,
      };
    default:
      return state;
  }
};

export default function Login() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const handleInput = useCallback(
    ({ target: { name, value } }) => {
      dispatch({ type: 'HANDLE_INPUT', name, value }),
        omitError(name);
    },
    [dispatch],
  );

  const dataToValidate = [
    {
      name: 'username',
      value: state.username,
      validationOptions: ['required'],
    },
    {
      name: 'password',
      value: state.password,
      validationOptions: ['required'],
    },
  ];

  const {
    getErrors,
    checkIsFormValid,
    omitError,
  } = useFormValidation();

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    checkIsFormValid(dataToValidate) && console.log('ok');
  });

  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <img src={logo} alt="Sensus pro" />
        </div>
        <form noValidate onSubmit={handleSubmit}>
          <InputWithIcon
            name="username"
            value={state.username}
            onChange={handleInput}
            iconSrc={userSVG}
            className={cx(styles.loginInput, 'mb-20')}
          />
          {!!getErrors('username') && (
            <div className={cx(styles.error, 'mb-20')}>
              {getErrors('username')}
            </div>
          )}
          <InputWithIcon
            name="password"
            value={state.password}
            onChange={handleInput}
            iconSrc={lockSVG}
            className={cx(styles.loginInput, 'mb-20')}
          />
          {!!getErrors('password') && (
            <div className={cx(styles.error, 'mb-20')}>
              {getErrors('password')}
            </div>
          )}
          <LoginButton className={styles.loginBtn} />
        </form>
      </div>
    </div>
  );
}
