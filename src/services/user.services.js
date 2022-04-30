import axios from 'axios';
import authHeader from './auth-header';

const API_URL = import.meta.env.VITE_BASE_API_URL;

class UserService {
    getUser() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }


//   getAllUser(page){
//     return axios.get(API_URL + 'web/user?page=' + page, { headers: authHeader() });
//   }
}

export default new UserService();