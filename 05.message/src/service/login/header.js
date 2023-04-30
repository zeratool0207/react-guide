export default function header() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.token.token) {
      return { Authorization: 'Bearer ' + user.token.token }; // for Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  } 