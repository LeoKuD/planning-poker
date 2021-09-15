import axios from 'axios';

const option = {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export const percent = new Intl.NumberFormat('en-US', option);

export const cardName = (value: string): string => value.split('-')[0];

export const cardScore = (value: string): number | null => parseInt(value.split('-')[1], 10);

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
