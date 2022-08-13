import { createRequest } from 'services/http';

export const getCatalogue = (params = {}) =>
  createRequest({ url: '/foods', params: { ...params } });
