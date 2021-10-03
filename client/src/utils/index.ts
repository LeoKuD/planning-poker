import { apiConfig } from 'api/config';
import axios from 'axios';

const option = {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export const percent = new Intl.NumberFormat('en-US', option);

export const cardName = (value: string): string => value.split('-')[0];

export const cardScore = (value: string): number | null => parseInt(value.split('-')[1], 10);

export const getSessionId = (url: string): string | null => {
  const sessionId = url.split('/');
  return sessionId[sessionId.length - 1];
};

export const uploadsUserAvatar = (avatarData: FileList): void => {
  const data = new FormData();
  data.append('image', [...avatarData][0]);
  axios.post(`${apiConfig.BASE_URL}/api/avatar`, data)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
};
