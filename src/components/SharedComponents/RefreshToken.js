import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil';
import axios from 'axios';

export const KakaoRefresh = async () => {
  const [loggedin, setLoggedIn] = useRecoilState(loginState);
  try {
    const response = await axios.post(
      'https://api.found-er.co.kr/api/token/refresh',
      { refresh: `${localStorage.getItem('refreshtoken')}` }
    );
    console.log(response.data);
    console.log('리프레쉬 성공');

    localStorage.setItem('accesstoken', response.data.access);
    localStorage.setItem('refreshtoken', response.data.refresh);
    setLoggedIn(true);
  } catch (e) {
    console.log(e);
    console.log('리프레쉬 불가');
  }

  setInterval(KakaoRefresh, 1000 * 60 * 4);
};

export default KakaoRefresh;

