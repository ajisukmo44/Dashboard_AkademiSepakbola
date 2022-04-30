import axios from 'axios';
const API_URL = import.meta.env.VITE_BASE_API_AUTH_URL;

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login-admin', {
        email: user.email,
        password: user.password,
        dashboard: true
      })
      .then(response => {
        if (response.status == 200) {
          localStorage.setItem('user', JSON.stringify(response.data.data.user));
          localStorage.setItem('token', JSON.stringify(response.data.data.access_token));
        }
        return response.data
        this.$router.go('/');
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();