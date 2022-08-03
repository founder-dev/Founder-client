import styled from "styled-components";
import KaKaoCode from "../KakaoCode";
import KaKaoLogin from '../../assets/SignUpAssets/KaKaoLogin.png';

const KaKaoLoginButton = () => {
  return (
    <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%3A%2F%2Ffound-er.co.kr%2Fapi%2Fauth%2Fkakao%2Fsignin%2Fcallback%26through_account%3Dtrue%26client_id%3Dbc422e96c0ca239a21e64daadbfc9161">
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
