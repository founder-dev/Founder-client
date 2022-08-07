import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil';
import axios from 'axios';

export const KakaoRefresh = async () => {
  const [loggedin, setLoggedIn] = useRecoilState(loginState);
  try {
    const response = await axios.post(
      'https://found-er.co.kr/api/token/refresh',
      { refresh: `${localStorage.refreshtoken}` },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
    console.log('리프레쉬 성공');
    alert('성공');
    localStorage.setItem('accesstoken', response.data.token.access);
    localStorage.setItem('refreshtoken', response.data.token.refresh);
  } catch (e) {
    console.log(e);
    console.log('리프레쉬 불가');
  }
};

/*
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
