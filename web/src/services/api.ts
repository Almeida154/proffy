import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       localStorage.removeItem('@proffy:user');
//       localStorage.removeItem('@proffy:token');
//       delete api.defaults.headers.common['Authorization'];
//     }

//     return error;
//   }
// );

export default api;
