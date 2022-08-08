import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginState } from '../recoil';
import { useRecoilState } from 'recoil';
import KakaoRefresh from '../components/SharedComponents/RefreshToken';

function KaKaoLoginHandlerPage() {
  const [loggedin, setLoggedIn] = useRecoilState(loginState);

  var code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const kakaologin = async () => {
    try {
      const response = await axios.get(
        `https://api.found-er.co.kr/api/auth/kakao/signin/callback?code=${code}`
      );
      console.log(response.data);
      console.log('로그인 성공');
      localStorage.setItem('accesstoken', response.data.token.access);
      localStorage.setItem('refreshtoken', response.data.token.refresh);
      localStorage.setItem('kakaotoken', response.data.token.kakao);
      console.log(localStorage.accesstoken);
      setLoggedIn(true);

      setTimeout(KakaoRefresh, 300000 - 60000);
      navigate('/');
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
