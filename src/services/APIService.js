import axios from 'axios';

const HOST_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/'
    : 'https://pianotes-server.herokuapp.com/';

class APIService {
  static async get(uri) {
    const response = axios.get(HOST_URL + uri);
    const { data } = await response;
    return data;
  }
}

export default APIService;
