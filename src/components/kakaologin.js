import axios from 'axios';
import { loginState } from '../recoil';

/*export default kakaologin(code) = async () => {
  try {
    const response = await axios.get(
      `https://found-er.co.kr/api/auth/kakao/signin/callback?code=${code}`
    );
    console.log(response.data);
    console.log('로그인 성공');
    setLoggedIn(true);
    navigate('/');
  } catch (e) {
    console.log(e);
    console.log('로그인 불가');
  }
};*/ //함수분리
