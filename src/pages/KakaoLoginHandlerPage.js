import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginState } from '../recoil';
import { useRecoilState } from 'recoil';

function KaKaoLoginHandlerPage() {
  const [loggedin, setLoggedIn] = useRecoilState(loginState);
  var code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const kakaologin = async () => {
    try {
      const response = await axios.get(
        `https://found-er.co.kr/api/auth/kakao/signin/callback?code=${code}`
      );
      console.log(response.data);
      console.log('로그인 성공');
      localStorage.setItem('accesstoken', response.data.token.access);
      localStorage.setItem('refreshtoken', response.data.token.refresh);
      console.log(localStorage.accesstoken);
      setLoggedIn(true);
      navigate('/');
    } catch (e) {
      console.log(e);
      console.log('로그인 불가');
    }
  };

  useEffect(() => {
    kakaologin();
  }, []);

  return (
    <>
      <div>{code}</div>
      <div>기다려주세요~</div>
    </>
    //axios 통신을 통해 인가코드 넘겨주기
  );
}

export default KaKaoLoginHandlerPage;
