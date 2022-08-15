import { createRequest } from 'services/http';

export const getFoods = (params = {}) =>
  createRequest({ url: '/foods', params: { ...params } });
