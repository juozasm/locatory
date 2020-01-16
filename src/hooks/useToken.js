import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from 'store/modules/auth';
import { getToken as getTokenAPI } from 'api';

export default function useToken() {
  const [error, setError] = useState();
  const [requesting, setRequesting] = useState(false);
  const dispatch = useDispatch();
  const getToken = useCallback(formData => {
    setRequesting(true);
    setError();
    getTokenAPI(formData)
      .then(res => {
        console.log(res.data.token);
        window.localStorage.setItem('token', res.data.token);
        dispatch(setToken(res.data.token));
        setRequesting(false);
      })
      .catch(error => {
        console.log(error);
        setError(error.message || 'Something went wrong...');
        setRequesting(false);
      });
  }, []);
  return {
    error,
    getToken,
    requesting,
  };
}
