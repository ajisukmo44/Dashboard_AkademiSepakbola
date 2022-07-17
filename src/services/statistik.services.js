import axios from 'axios';
import authHeader from './auth-header';

const API_URL = import.meta.env.VITE_BASE_API_URL;

class StatistikService {

  // data statistik 
  getTotalTeams() {
    return axios.get(API_URL + 'statistik-tim', { headers: authHeader() });
  }

  getTotalDaily() {
    return axios.get(API_URL + 'statistik-tim-daily', { headers: authHeader() });
  }

  getTotalAcc() {
    return axios.get(API_URL + 'statistik-tim-baru', { headers: authHeader() });
  }

  getTotalPesan() {
    return axios.get(API_URL + 'statistik-total-pesan', { headers: authHeader() });
  }

  getTotalBlog() {
    return axios.get(API_URL + 'statistik-total-blog', { headers: authHeader() });
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

  // data tim
  getTeams() {
    return axios.get(API_URL + 'teams', { headers: authHeader() });
  }

  getTeamsNew() {
    return axios.get(API_URL + 'teams-new', { headers: authHeader() });
  }

  deleteTeams(id) {
    return axios.delete(API_URL + 'delete-tim/'+id, { headers: authHeader() });
  }


  accTeamsNew(id){
    return axios.get(API_URL + 'teams-new-acc/'+id, { headers: authHeader() });
  }

  getDetailTim(id) {
    return axios.get(API_URL + 'get-tim-detail/'+id, { headers: authHeader() });
  }

  getGaleri(id) {
    return axios.get(API_URL + 'galleryfoto?team_id='+id, { headers: authHeader() });
  }

  updateTim(data) {
    return axios.put(API_URL + 'updatetim', data, { headers: authHeader() });
  }

  tambahTim(data) {
    return axios.post(API_URL + 'register-by-admin', data, { headers: authHeader() });
  }

  tambahFotoTim(id, fd){
    return axios.post(API_URL + 'galleryfototambah/'+id, fd, { headers: authHeader() });
  }

  ubahFotoProfilTim(id, fd){
    return axios.post(API_URL + 'galleryfototambah/'+id, fd, { headers: authHeader() });
  }

  ubahLogoTim(id, fd){
    return axios.post(API_URL + 'update-logo/'+id, fd, { headers: authHeader() });
  }

  deleteGaleri(id){
    return axios.delete(API_URL + 'delete-galery/'+id, { headers: authHeader() });
  }


  // data kategori
  getKategori() {
    return axios.get(API_URL + 'kategori-tim', { headers: authHeader() });
  }

  tambahKategoriTim(data) {
    return axios.post(API_URL + 'tambah-kategori-tim', data, { headers: authHeader() });
  }

  getKategoriTim() {
    return axios.get(API_URL + 'tim-kategori', { headers: authHeader() });
  }

  deleteKategoriTim(id) {
    return axios.delete(API_URL + 'delete-kategori-tim/'+id,  { headers: authHeader() });
  }
  
  getKategoriBlog() {
    return axios.get(API_URL + 'berita-kategori', { headers: authHeader() });
  }

  getKategoriBerita() {
    return axios.get(API_URL + 'berita-kategori', { headers: authHeader() });
  }
  
  tambahKategoriBerita(data) {
    return axios.post(API_URL + 'tambah-kategori-berita', data, { headers: authHeader() });
  }

  deleteKategoriBerita(id) {
    return axios.delete(API_URL + 'delete-kategori-berita/'+id,  { headers: authHeader() });
  }
  

  // blog berita
  getBerita() {
    return axios.get(API_URL + 'berita', { headers: authHeader() });
  }

  updateBerita(id, data) {
    return axios.put(API_URL + 'update-berita/'+id, data, { headers: authHeader() });
  }

  detailBerita(id) {
    return axios.get(API_URL + 'detail-berita/'+id, { headers: authHeader() });
  }

  tambahBeritalog(data) {
    return axios.post(API_URL + 'tambah-berita', data, { headers: authHeader() });
  }
  
  deleteBerita(id) {
    return axios.delete(API_URL + 'delete-berita/'+id,  { headers: authHeader() });
  }


  // pesan masuk
  getPesanMasuk() {
    return axios.get(API_URL + 'pesan', { headers: authHeader() });
  }
  
  deletePesan(id) {
    return axios.delete(API_URL + 'delete-pesan/'+id,  { headers: authHeader() });
  }


  // tambahan
  getProv() {
    return axios.get(API_URL + 'getprov', { headers: authHeader() });
  }

  getKabupaten(id) {
    return axios.get(API_URL + 'getkab/'+id, { headers: authHeader() });
  }

  getUser() {
    return axios.get(API_URL + 'user-list', { headers: authHeader() });
  }

  getUserAdmin() {
    return axios.get(API_URL + 'user-list-admin', { headers: authHeader() });
  }

  deleteUser(id) {
    return axios.delete(API_URL + 'delete-user/'+id,  { headers: authHeader() });
  }


}

export default new StatistikService();