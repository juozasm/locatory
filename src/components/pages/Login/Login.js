import React, { useReducer, useCallback } from 'react';
import styles from './Login.module.scss';
import logo from 'assets/sensus-pro.png';
import { InputWithIcon } from 'components/common/Input';
import lockSVG from 'assets/ico-lock.svg';
import userSVG from 'assets/ico-username.svg';
import LoginButton from 'components/common/LoginButton';
import cx from 'classnames';
import useFormValidation from 'hooks/useFormValidation';
import useToken from 'hooks/useToken';

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

  const { error, getToken, requesting } = useToken();

  const handleInput = ({ target: { name, value } }) => {
    omitError(name);
    dispatch({ type: 'HANDLE_INPUT', name, value });
  };

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    checkIsFormValid(dataToValidate) && getToken(state);
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
            placeholder="Username"
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
            type="password"
            placeholder="Password"
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
          <LoginButton
            loading={requesting}
            className={styles.loginBtn}
          />
          {error && (
            <div className={cx(styles.error, 'mt-20')}>{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}
