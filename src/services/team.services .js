import axios from 'axios';
import authHeader from './auth-header';

const API_URL = import.meta.env.VITE_BASE_API_URL;

class TeamService {
    getTeams() {
    return axios.get(API_URL + 'teams', { headers: authHeader() });
  }
}

export default new TeamService();