import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const getToken = () => {
  const token = localStorage.getItem('Token');
  return token ? `Bearer ${token}` : '';
}

const headers = { Authorization: getToken() };

const service = {
  post: (url, data) => {
    return axios.post(baseURL + url, data, { headers });
  },
  get: (url) => {
    return axios.get(baseURL + url, { headers });
  },
  delete: (url) => {
    return axios.delete(baseURL + url, { headers });
  },
  put: (url, data) => {
    return axios.put(baseURL + url, data, { headers });
  }
};

export default service;
