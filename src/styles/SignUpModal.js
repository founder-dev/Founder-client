import React from 'react';
import Close from '../assets/SignUpAssets/CloseButton.png';
import KaKaoLogin from '../assets/SignUpAssets/KaKaoLogin.png';
import Founder from '../assets/SharedAssets/Founder.png';
import KaKaoCode from '../components/KakaoCode';
import { Container, Background } from '../components/ModalComponents/ModalDesign';
import { ModalBlock, Wrapper, Contents, Logo,
   Text, LoginButton, Guide,CloseButton } from '../components/SignUpPageComponents/SignUpModalPresenter';

const SignUpModal = ({ setOpenModal }) => {
  return (
    <Container>
      <Background/>
      <ModalBlock>
        <Wrapper>
        <Contents>
          <Logo src ={Founder}/>
          <Text>지금 로그인하고 파운더만의 설문조사에 참여하세요.
             89가지 제품 중 가장 필요한 제품을 큐레이션 해드려요.</Text>
          <LoginButton onClick={KaKaoCode}><img src ={KaKaoLogin}/></LoginButton>
          <Guide>서비스 이용을 위해 이메일과 이름을 수집합니다.</Guide>
          <CloseButton
            onClick={() => {
              setOpenModal(false);
            }}
          ><img src ={Close}  alt=""/>
          </CloseButton>
        </Contents>
        </Wrapper>
      </ModalBlock>
    </Container>
  );
};

export default SignUpModal;
