import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const instance = new axios.create({
  cancelToken: source.token,
  baseURL: 'http://localhost:8085',
  timeout: 120000,
});

export const cancelAxiosRequest = () =>
  source.cancel('Operation canceled by the user.');

export function getToken(formData) {
  return instance({
    method: 'post',
    url: '/token',
    data: formData,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
}

export function getLocations(token) {
  return instance({
    method: 'get',
    url: '/locations',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json',
      Authorization: token,
    },
  });
}
