import React from 'react';
import Close from '../assets/SignUpAssets/CloseButton.png';
import KaKaoLogin from '../assets/SignUpAssets/KaKaoLogin.png';
import Founder from '../assets/SharedAssets/Founder.png';
import KaKaoCode from '../components/KakaoCode';
import {
  Container,
  Background,
} from '../components/ModalComponents/ModalDesign';
import {
  ModalBlock,
  Wrapper,
  Contents,
  Logo,
  Text,
  LoginButton,
  Guide,
  CloseButton,
} from '../components/SignUpPageComponents/SignUpModalPresenter';

const SignUpModal = ({ setOpenModal }) => {
  return (
    <Container>
      <Background />
      <ModalBlock>
        <Wrapper>
          <Contents>
            <Logo src={Founder} />
            <Text>
              지금 로그인하고 파운더만의 설문조사에 참여하세요. 89가지 제품 중
              가장 필요한 제품을 큐레이션 해드려요.
            </Text>
            <a href='https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%3A%2F%2Ffound-er.co.kr%2Fapi%2Fauth%2Fkakao%2Fsignin%2Fcallback%26through_account%3Dtrue%26client_id%3Dbc422e96c0ca239a21e64daadbfc9161'>
              <LoginButton onClick={KaKaoCode}>
                <img src={KaKaoLogin} />
              </LoginButton>
              </a>
            <Guide>서비스 이용을 위해 이메일과 이름을 수집합니다.</Guide>
            <CloseButton
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <img src={Close} alt="" />
            </CloseButton>
          </Contents>
        </Wrapper>
      </ModalBlock>
    </Container>
  );
};

export default SignUpModal;
