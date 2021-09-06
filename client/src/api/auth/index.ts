import axios from 'axios';
import * as utils from '../../utils';

export const getProfile = async (token: string) => {
  try {
    utils.setAxiosAuthToken(token);
    const res = await axios({
      method: 'GET',
      url: '/api/profile',
      headers: {
        Autorization: `Bearer ${token}`
      }
    });
    return res;
  } catch (err) {
    // throw new Error(err.response?.data.message);
  }
};
