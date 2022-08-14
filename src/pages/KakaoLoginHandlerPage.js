import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginState } from '../recoil';
import { useRecoilState } from 'recoil';

function KaKaoLoginHandlerPage() {
  const [loggedin, setLoggedIn] = useRecoilState(loginState);

  var code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const KakaoRefresh = async () => {
    try {
      const response = await axios.post(
        'https://api.found-er.co.kr/api/token/refresh',
        { refresh: `${localStorage.getItem('refreshtoken')}` }
      );
      console.log(response.data);
      console.log('리프레쉬 성공');

      localStorage.removeItem('accesstoken');
      localStorage.removeItem('removetoken');
      localStorage.setItem('accesstoken', response.data.access);
      localStorage.setItem('refreshtoken', response.data.refresh);
      setLoggedIn(true);
    } catch (e) {
      console.log(e);
      console.log('리프레쉬 불가');
    }
  };

  const kakaologin = async () => {
    try {
      const response = await axios.post(
        `https://api.found-er.co.kr/api/auth/kakao/signin/callback?code=${code}`
      );
      console.log(response.data);
      console.log('로그인 성공');
      localStorage.setItem('accesstoken', response.data.token.access);
      localStorage.setItem('refreshtoken', response.data.token.refresh);
      localStorage.setItem('kakaotoken', response.data.token.kakao);
      console.log(localStorage.accesstoken);
      console.log(code);
      setLoggedIn(true);

      setInterval(KakaoRefresh, 1000 * 60 * 4);
      if (response.data.token.access) {
        navigate('/');
      }
    } catch (e) {
      console.log('로그인 불가');
    }
  };

  useEffect(() => {
    kakaologin();
  }, []);

  return (
    <>
      <div>로딩 중 기다려주세요~</div>
    </>
  );
}

export default KaKaoLoginHandlerPage;
