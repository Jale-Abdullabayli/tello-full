import axios from './index';

export const signup = (userData) => axios.post('/users/signup', userData);
export const login = (userData) => axios.post('/users/login', userData);