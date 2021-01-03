import axios from 'axios';

const HOST_URL = 'http://localhost:8080/';

class APIService {
  static async get(uri) {
    const response = axios.get(HOST_URL + uri);
    const { data } = await response;
    return data;
  }
}

export default APIService;
