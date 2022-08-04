/*import axios from 'axios';

export const requestAccessToken = async (refresh_token) => {
  return await axios
    .post(`https://found-er.co.kr/api/token/refresh`, {
      refresh: refresh_token,
    })
    .then((response) => {
     localStorage.setItem("accestoken", response.data.access)
      console.log(response.data.access);
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};

export const checkAccessToken = async (refresh) => {
  if (axios.defaults.headers.common['Authorization'] === undefined) {
    return await requestAccessToken(refresh).then((response) => {
      return response;
    });
  } else {
    return axios.defaults.headers.common['Authorization'].split(' ')[1];
  }
};*/
