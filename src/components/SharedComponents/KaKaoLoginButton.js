import styled from 'styled-components';
import KaKaoLogin from '../../assets/SignUpAssets/KaKaoLogin.png';
import { KAKAO_AUTH_URL } from './KaKaoAuth';

const KaKaoLoginButton = () => {
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
