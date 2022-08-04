import styled from 'styled-components';
import KaKaoCode from '../KakaoCode';
import KaKaoLogin from '../../assets/SignUpAssets/KaKaoLogin.png';
import * as config from '../../config';

const KaKaoLoginButton = () => {
  const url = config.KAKAO_URL;

  const CLIENT_ID = 'bc422e96c0ca239a21e64daadbfc9161';
  const REDIRECT_URI = 'http://localhost:3000/kakao';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <a href={KAKAO_AUTH_URL}>
      <LoginButton>
        <img src={KaKaoLogin} />
      </LoginButton>
    </a>
  );
};

export default KaKaoLoginButton;

export const LoginButton = styled.button`
  position: absolute;
  background-color: none;
  left: 260px;
  top: 382px;
  cursor: pointer;
  padding: 0;
  padding-bottom: 0;
  border: none;
  height: 68px;
`;
