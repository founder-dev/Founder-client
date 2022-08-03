import styled from "styled-components";
import KaKaoCode from "../KakaoCode";
import KaKaoLogin from '../../assets/SignUpAssets/KaKaoLogin.png';
import * as config from '../../config';

const KaKaoLoginButton = () => {
  const url = config.KAKAO_URL;

  return (
    <a href={url}>
      <LoginButton onClick={KaKaoCode}>
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
