import Cookies from 'js-cookie';

export default ({ $axios }) => {
  $axios.defaults.baseURL = process.env.API_URL;

  if (process.server) {
    return;
  }

  $axios.interceptors.request.use(async request => {
    request.baseURL = process.env.API_URL;

    // Get token from auth.js store
    const token = await Cookies.get('token');

    // Update token axios header
    if (token) {
      request.headers.common['Authorization'] = await `Bearer ${token}`;
    }
    return request;
  });
};
