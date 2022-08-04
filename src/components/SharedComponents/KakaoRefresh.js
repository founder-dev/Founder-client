import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil';
import axios from 'axios';
import kakaologin from '../../pages/KakaoLoginHandlerPage';

console.log(localStorage.getItem('accesstoken'));

const KakaoRefresh = async () => {
  const [loggedin, setLoggedIn] = useRecoilState(loginState);
  try {
    const response = await axios.post(
      'https://found-er.co.kr/api/token/refresh',
      { refresh: `Bearer ${localStorage.getItem('refreshtoken')}` }
    );
    console.log(response.data);
    console.log('리프레쉬 성공');

    localStorage.setItem('accesstoken', response.data.token.access);
    localStorage.setItem('refreshtoken', response.data.token.refresh);
    kakaologin();
    setLoggedIn(true);
  } catch (e) {
    console.log(e);
    console.log('리프레쉬 불가');
  }
};

export default KakaoRefresh;
