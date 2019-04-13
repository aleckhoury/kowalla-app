import Cookies from 'js-cookie';

export default ({ $axios }) => {
  $axios.defaults.baseURL = 'http://localhost:8080';

  if (process.server) {
    return
  }

  $axios.interceptors.request.use(async request => {
    request.baseURL = 'http://localhost:8080';

    // Get token from auth.js store
    const token = await Cookies.get('token');
    // console.log(token);

    // Update token axios header
    if (token) {
      request.headers.common['Authorization'] = await `Bearer ${ token }`;
    }
    return request
  })
}