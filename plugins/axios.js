import Cookies from 'js-cookie';

export default ({ $axios, isDev }) => {
  $axios.defaults.baseURL = isDev ? 'http://localhost:8080' : 'https://kowalla-backend.herokuapp.com';


  if (process.server) {
    return;
  }

  $axios.interceptors.request.use(async request => {
    request.baseURL = isDev ? 'http://localhost:8080' : 'https://kowalla-backend.herokuapp.com';

    // Get token from auth.js store
    const token = await Cookies.get('token');
    // console.log(token);

    // Update token axios header
    if (token) {
      request.headers.common['Authorization'] = await `Bearer ${ token }`;
    }
    return request;
  });
};