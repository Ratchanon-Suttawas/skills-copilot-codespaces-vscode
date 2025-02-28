import axios from 'axios';
import { handleAPIError } from '../utils/errorHandler';

const api = axios.create({
  baseURL: process.env.API_BASE_URL
});

api.interceptors.response.use(
  response => response,
  error => {
    const apiError = handleAPIError(error);
    console.error(apiError);
    return Promise.reject(apiError);
  }
);
