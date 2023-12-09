import axios from 'axios';

axios.defaults.baseURL = 'https://650da349a8b42265ec2c86c9.mockapi.io';

export const fetchCars = async (page = 1) => {
  return await axios.get('/advert', { params: { page, limit: 12 } });
};
