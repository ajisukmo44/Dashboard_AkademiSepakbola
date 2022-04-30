import axios from 'axios';
import authHeader from './auth-header';

const API_URL = import.meta.env.VITE_BASE_API_URL;

class StatistikService {
  getTotalTeams() {
    return axios.get(API_URL + 'statistik-tim', { headers: authHeader() });
  }

  getTotalDaily() {
    return axios.get(API_URL + 'statistik-tim-daily', { headers: authHeader() });
  }

  getTotalAcc() {
    return axios.get(API_URL + 'statistik-tim-baru', { headers: authHeader() });
  }

  listTimBaru() {
    return axios.get(API_URL + 'statistik-tim-last', { headers: authHeader() });
  }

  topWilayah() {
    return axios.get(API_URL + 'statistik-tim-city', { headers: authHeader() });
  }

  getTotalKategori() {
    return axios.get(API_URL + 'kategori-tim', { headers: authHeader() });
  }

  getTeams() {
    return axios.get(API_URL + 'teams', { headers: authHeader() });
  }

  getDetailTim(id) {
    return axios.get(API_URL + 'get-tim-detail/'+id, { headers: authHeader() });
  }

  getKategori() {
    return axios.get(API_URL + 'kategori-tim', { headers: authHeader() });
  }

  getProv() {
    return axios.get(API_URL + 'getprov', { headers: authHeader() });
  }

  getKabupaten(id) {
    return axios.get(API_URL + 'getkab/'+id, { headers: authHeader() });
  }

}

export default new StatistikService();