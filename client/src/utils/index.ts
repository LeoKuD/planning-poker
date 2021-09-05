import axios from 'axios';

export const setLocalStorageToken = (token: string): void => localStorage.setItem(
    process.env.REACT_APP_LOCAL_TOKEN as string,
    token,
);

// eslint-disable-next-line arrow-body-style
export const getLocalStorageToken = (): string => {
  return localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN as string) as string;
};

export const setAxiosAuthToken = (token: string): void => {
  axios.defaults.headers.common.Autorization = `Bearer ${token}`;
};
